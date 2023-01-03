import React, { forwardRef, useState, useEffect } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import Datetime from "react-datetime";
import UserLayout from "../../Layouts/UserLayout/UserLayout";
import {
  RequestForm,
  RequestFormPageLayout,
  FormContainer,
  Input,
  FormInnerContainer,
  TextArea,
  FormError,
  Flex
} from "./Styles";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Components/ApplicationCard/Style";
import { useForm } from "react-hook-form";
import Spinner from "../../Components/Spinner";
import TutorOBJ from "../../classes/user.class"
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

type InputsPropT = {
  fullName: string;
    document: string;
  chargePerHour:number,
    language: string,
  bio:string
};

export default function TutorApplyForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [document, setDocument] = useState<string | any>("");
  const [language, setLanguage] = useState<string[]>([]);
  const [chargePerHour, setChargePerHour] = useState(0.00);
  const {id} = useParams()
  const navigate = useNavigate();

  const goto = (path: string, data?: any) => {
    if (data) {
      navigate(path, data);
    } else {
      navigate(path);
    }
  };
  const getExtension: any = (file?: any) => {
    if (file) {
      let xy = file[0].name.split('.')
      let extension = xy[xy.length - 1]
      return extension
    }

}
  const schema:any = Yup.object({
    fullName: Yup.string().required("Required!"),
    chargePerHour: Yup.string().required("Required!"),
    document:  Yup.mixed()
  .test({
    message: 'Please provide a supported file type,Pdf only allowed',
    test: (document, context) => {
      const isValid = ['pdf'].includes(getExtension(document));
      if (!isValid) context?.createError();
      return isValid;
    }
  })
  .test({
    message: `File too big, can't exceed 1mb`,
    test: () => {
      const isValid = document?.size < 1000000;
      return isValid;
    }
  }),
    bio: Yup.string()
      .required("Required!")
      .min(30, "description is too short - should be 30 chars minimum."),
  }).required();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<InputsPropT>({
    resolver: yupResolver(schema),
  });
  const languageHandler = (event: any) => {
    if (event.checked) {
      if (language.includes(event.value)){
        return
      }
      console.log('✅ Checkbox is checked');
        setLanguage( language.concat(event.value))
    }  else {
      console.log('⛔️ Checkbox is NOT checked');
     for( var i = 0; i < language.length; i++){ 
        if ( language[i] === event.value) { 
            language.splice(i, 1); 
        }
    }
      return language
      }
  }
  
  const handlePostRequst = async (e: any) => {
  const formData =  new FormData()
    setIsLoading(true);
    const payload:any = {
      bio,
      language:"English",
      requestId:id,
        chargePerHour,
      fullName,
    };
    formData.append('payload',JSON.stringify(payload))
    formData.append('document',document)
    await TutorOBJ.tutor_apply_request(formData,payload.requestId).then((res: any) => {
      if (res) {
        if (res?.status === true) {
          toast.success(res?.message);
          setIsLoading(false);
          goto("/timeline");
        } else {
          toast.error(res?.message);
          setIsLoading(false);
        }
      } else {
        toast.error(res?.message);
        setIsLoading(false);
      }
      setIsLoading(false);
    });
  };


  return (
    <UserLayout>
      <RequestFormPageLayout>
        <h2>Request Form</h2>
        <RequestForm onSubmit={handleSubmit(handlePostRequst)} encType="multipart/form-data">
          <FormInnerContainer>
            <FormContainer>
              <label>Full Name</label>
              {errors.fullName && (
                <FormError>{errors.fullName.message}</FormError>
              )}
              <Input
                {...register("fullName", { required: true })}
                placeholder="John doe"
                type="text"
                onChange={(e)=>setFullName(e.target.value)}
              />
            </FormContainer>
        <FormContainer>
              <label>Charge Per Hour</label>
              {errors.chargePerHour && (
                <FormError>{errors.chargePerHour.message}</FormError>
              )}
              <Input
                {...register("chargePerHour", { required: true })}
                placeholder="200"
                type="number"
                 onChange={(e:any)=>setChargePerHour(e.target.value)}
              />
            </FormContainer>
            <FormContainer>
              <label>Upload Cover Letter</label>
              {errors.document && (
                <FormError>{errors.document.message}</FormError>
              )}
              <Input
                {...register("document", { required: true })}
                type="file"
                name="document"
                 onChange={(e:any)=>setDocument(e.target.files[0])}
              />
                      </FormContainer>
                          <FormContainer>
              <label>About Self</label>
              {errors.bio && <FormError>{errors. bio.message}</FormError>}
              <TextArea {...register("bio", { required: true })}  onChange={(e)=>setBio(e.target.value)}/>
            </FormContainer>
         
            <Button disabled={isLoading}>
              {isLoading ? <Spinner isLoading={isLoading} /> : "Post Request"}
            </Button>
          </FormInnerContainer>
        </RequestForm>
      </RequestFormPageLayout>
    </UserLayout>
  );
}
