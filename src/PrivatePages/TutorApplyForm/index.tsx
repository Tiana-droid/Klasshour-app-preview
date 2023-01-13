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
} from "./Styles";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Components/ApplicationCard/Style";
import { useForm } from "react-hook-form";
import Spinner from "../../Components/Spinner";
import TutorOBJ from "../../classes/user.class"
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { getStoredClientUser } from "../../utils/LS";

type InputsPropT = {
  chargePerHour:number,
};

export default function TutorApplyForm() {
  const { fullname,currentCharge } = getStoredClientUser()

  const [isLoading, setIsLoading] = useState(false);
  const [bio, setBio] = useState("");
  const [document, setDocument] = useState<string | any>("");
  const [language, setLanguage] = useState<string[]>([]);
  const [chargePerHour, setChargePerHour] = useState(currentCharge);
  const { id } = useParams()
  
  const navigate = useNavigate();
  const goto = (path: string, data?: any) => {
    if (data) {
      navigate(path, data);
    } else {
      navigate(path);
    }
  };
//   const getExtension: any = (file?: any) => {
//     if (file) {
//       let xy = file[0].name.split('.')
//       let extension = xy[xy.length - 1]
//       return extension
//     }

// }
  const schema:any = Yup.object({
    chargePerHour: Yup.string().required("Required!"),
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
    fullName:fullname,
    };
    formData.append('payload',JSON.stringify(payload))
    formData.append('document',document)
    await TutorOBJ.tutor_apply_request(formData,payload.requestId).then((res: any) => {
      
        if (res?.status === true) {
          toast.success(res?.message);
          setIsLoading(false);
          goto("/timeline");
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
        <h2>Application Form</h2>
        <RequestForm encType="multipart/form-data" onSubmit={handleSubmit(handlePostRequst)} >
          <FormInnerContainer>
            <FormContainer>
              <label>Full Name</label>
              <Input
                placeholder="John doe"
                type="text"
                value={fullname}
                readOnly
              />
            </FormContainer>
        <FormContainer>
              <label>Charge Per Hour(NGN)</label>
              {errors.chargePerHour && (
                <FormError>{errors.chargePerHour.message}</FormError>
              )}
              <Input
                {...register("chargePerHour", { required: true })}
                placeholder="200"
                value={chargePerHour}
                type="number"
                 onChange={(e:any)=>setChargePerHour(e.target.value)}
              />
            </FormContainer>
            <FormContainer>
              <label>Upload Cover Letter(optional)</label>
              <Input
                type="file"
                name="document"
                 onChange={(e:any)=>setDocument(e.target.files[0])}
              />
              </FormContainer>
                          <FormContainer>
              <label>Application note(optional)</label>
              <TextArea  onChange={(e)=>setBio(e.target.value)}/>
            </FormContainer>
         
            <Button disabled={isLoading}>
              {isLoading ? <Spinner isLoading={isLoading} /> : "Submit"}
            </Button>
          </FormInnerContainer>
        </RequestForm>
      </RequestFormPageLayout>
    </UserLayout>
  );
}
