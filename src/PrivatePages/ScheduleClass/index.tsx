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
  FormFlex,
  TextArea,
  FormError,
  Flex
} from "./Styles"
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Components/ApplicationCard/Style";
import { useForm } from "react-hook-form";
import Spinner from "../../Components/Spinner";
import TutorOBJ from "../../classes/user.class"
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { AppColors } from "../../utils/constants";

type InputsPropT = {
  recording: any;
  allowRecordingDownload:boolean,
  record:boolean,
  allowEditVideo:boolean,
  allowEdit:boolean,
  allowEditAudio: boolean,
  allowRecordControl:boolean,
    participantControl: any;
  duration:number,
};

export default function ScheduleClass() {
  const [isLoading, setIsLoading] = useState(false);
  const [autoRecord,setAutoRecord] = useState(false)
  const [record,setRecord] = useState(false)
  const [allowRecordControl, setAllowRecordControl] = useState(false)
  const [allowEdit,setAllowEdit] = useState(false)
  const [allowEditAudio,setAllowEditAudio] = useState(false)
  const [allowEditVideo,setAllowEditVideo] = useState(false)
  const [allowRecordingDownload, setAllowRecordingDownload] = useState(false);
  const [duration, setDuration] = useState(0);
  const {state} = useLocation()
  const navigate = useNavigate();
  const goto = (path: string, data?: any) => {
    if (data) {
      navigate(path, data);
    } else {
      navigate(path);
    }
  };

  const schema = Yup.object({
    duration: Yup.number().required("Required!"),
  }).required();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<InputsPropT>({
    resolver: yupResolver(schema),
  });

  
  const handlePostRequst = async (e: any) => {
    setIsLoading(true);
    const payload:any = {
      recording:[record,autoRecord,allowRecordControl],
      requestId:state._id,
      duration,
        recordingDownload:allowRecordingDownload,
      participantControl:[allowEdit,allowEditAudio,allowEditVideo],
    };
    await TutorOBJ.tutor_schedule_class(payload).then((res: any) => {
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
      <h3>Class Start at {new Date(state.schedule).toLocaleDateString() + " "+new Date(state.schedule).toLocaleTimeString()} </h3>
      <RequestFormPageLayout>
        <h2>Set Class Control</h2>
        <RequestForm onSubmit={handleSubmit(handlePostRequst)}>
          <FormInnerContainer>
         
              <FormContainer>
              <FormFlex>
                 <label>Allow Record</label>
                <Input {...register("record", { required: true })} type={"checkbox"} checked={record} onChange={(e) => setRecord(!record)} />
               </FormFlex>
              </FormContainer>
              <FormContainer>
              <FormFlex>
                  <label>Allow auto Record</label>
                <Input type={"checkbox"} checked={autoRecord} onChange={(e)=>setAutoRecord(!autoRecord) } />
              </FormFlex>
              </FormContainer>
              <FormContainer>
               <FormFlex> <label>Allow Recording Control</label>
              <Input type={"checkbox"}/></FormFlex>
            </FormContainer>
              <FormContainer>
              <FormFlex>  <label>Allow Participants to Edit class</label>
              <Input type={"checkbox"}/></FormFlex>
              </FormContainer>
              <FormContainer>
              <FormFlex>
                 <label>Allow Participants to control class audio</label>
              <Input type={"checkbox"}/>
               </FormFlex>
              </FormContainer>
              <FormContainer>
               <FormFlex> <label>Allow participants to control class Video</label>
              <Input type={"checkbox"}/></FormFlex>
            </FormContainer>
            <FormContainer>
               <FormFlex> <label>Allow Participants to download record</label>
              <Input type={"checkbox"} value={ "Yes"} /></FormFlex>
            </FormContainer>
            <FormContainer>
              <label>Duration</label>
               {errors.duration && (
                <FormError>{errors.duration.message}</FormError>
              )}
                <Input {...register("duration", { required: true })} max="360" type={"number"} placeholder="Duration in minutes"  value={duration} onChange={ (e)=>setDuration(parseInt(e.target.value))} />
              </FormContainer>
            <Button disabled={isLoading}>
              {isLoading ? <Spinner isLoading={isLoading} /> : "Schedule"}
            </Button>
          </FormInnerContainer>
        </RequestForm>
      </RequestFormPageLayout>
    </UserLayout>
  );
}