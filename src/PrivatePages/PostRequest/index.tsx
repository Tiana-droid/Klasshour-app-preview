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
  PickerCont,
} from "./Styles";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Components/ApplicationCard/Style";
import { useForm } from "react-hook-form";
import Spinner from "../../Components/Spinner";
import StudentOBJ from "../../classes/student.class";
import { toast } from "react-toastify";
import { getStoredClientUser } from "../../utils/LS";
import { useNavigate } from "react-router-dom";
import { AppColors } from "../../utils/constants";

type InputsPropT = {
  subject: string;
  desc: string;
  document: string,
  emptySet:boolean
};

export default function PostRequest() {
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [document, setDocument] = useState<string | any>("");

  const navigate = useNavigate();

  const goto = (path: string, data?: any) => {
    if (data) {
      navigate(path, data);
    } else {
      navigate(path);
    }
  };

  const MyContainer = ({ className, children }: any) => {
    return (
      <div
        style={{
          padding: "2px",
          background: AppColors.brandRed,
          color: "#fff",
        }}
      >
        <CalendarContainer className={className}>
          <div style={{ background: "#f0f0f0", padding: "0.2rem" }}>
            What is your favorite day?
          </div>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };

  const ExampleCustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
    <PickerCont onClick={onClick} ref={ref}>
      {value}
    </PickerCont>
  ));
  const getExtension: any = (file?: any) => {
    if (file.length) {
      let xy = file[0].name.split('.')
      let extension = xy[xy.length - 1]
      return extension
    }
  }
    const { email, merithubUserID, userID } = getStoredClientUser();

    let schema = Yup.object({
      subject: Yup.string().required("Required!"),
      // document: Yup.mixed().when('emptySet', {
      //   is: true,
      //   then: Yup.mixed().test({
      //   message: 'Please provide a supported file type,Pdf only allowed',
      //   test: (document, context) => {
      //     const isValid = ['pdf'].includes(getExtension(document));
      //     if (!isValid) context?.createError();
      //     return isValid;
      //   }
      // })
      //   .test({
      //     message: `File too big, can't exceed 1mb`,
      //     test: () => {
      //       const isValid = document?.size < 1000000;
      //       return isValid;
      //     }
      //   })
      // }),
      desc: Yup.string()
        .required("Required!")
        .min(10, "description is too short - should be 10 chars minimum."),
    });

    const {
      register,
      handleSubmit,

      formState: { errors },
    } = useForm<InputsPropT>({
      resolver: yupResolver(schema),
    });

    const handlePostRequst = async (values: any) => {
      setIsLoading(true);
      const RqData = {
        subject: values.subject,
        schedule: startDate,
        description: values.desc,
        studentEmail: email,
        studentID: userID,
        merithubStudentID: merithubUserID,
      };
      StudentOBJ.post_request(RqData).then((res: any) => {
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

    useEffect(() => {
      console.log(getStoredClientUser());
    }, [startDate]);

    return (
      <UserLayout>
        <RequestFormPageLayout>
          <h2>Request Form</h2>
          <RequestForm onSubmit={handleSubmit(handlePostRequst)}>
            <FormInnerContainer>
              <FormContainer>
                <label>Subject</label>
                {errors.subject && (
                  <FormError>{errors.subject.message}</FormError>
                )}

                <Input
                  {...register("subject", { required: true })}
                  placeholder="physics"
                  type="text"
                />
              </FormContainer>

              <FormContainer>
                <label>Schedule</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date: any) => setStartDate(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="time"
                  // dateFormat="MMMM d, yyyy h:mm aa"
                  dateFormat="MMMM d yyy, h:mm:aa"
                  customInput={<ExampleCustomInput />}
                  calendarContainer={MyContainer}
                />
                {/* <Datetime input={true} /> */}
              </FormContainer>

              <FormContainer>
                <label>Description</label>
                {errors.desc && <FormError>{errors.desc.message}</FormError>}
                <TextArea {...register("desc", { required: true })} />
              </FormContainer>
              <FormContainer>
                <label>Upload(optional)</label>
               <input type="text" hidden  {...register("emptySet", { required: true })}/>

                {errors.document && (
                  <FormError>{errors.document.message}</FormError>
                )}
                <Input
                  {...register("document", { required: true })}
                  type="file"
                  name="document"
                  onChange={(e: any) => 
                    setDocument(e.target.files[0])
                  }
                />
              </FormContainer>
              <Button>
                {isLoading ? <Spinner isLoading={isLoading} /> : "Post Request"}
              </Button>
            </FormInnerContainer>
          </RequestForm>
        </RequestFormPageLayout>
      </UserLayout>
    );
  }

