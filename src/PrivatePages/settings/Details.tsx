import React, { useEffect, useState } from "react";
import { Flex, Input, Select, TextArea, Box, ActionButton,Identifier } from "./Styles";
import { toast } from "react-toastify";
import { getStoredClientUser } from "../../utils/LS";
import { FileUploader } from "react-drag-drop-files";
import userOBJ from "../../classes/user.class";
import { useNavigate } from "react-router-dom";
import Spinner from "../../Components/Spinner";

function getCountryCode(object: any, value: any) {
  const output =  Object.keys(object).find((key:any) =>object[key].includes(value))
  return output;
}
export default function Details(props: any) {
  const countryCodes = require('country-codes-list')
  let cCode = countryCodes.customList('countryCallingCode')
  const [image, setImage] = useState<File | null |any>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [bio, setBio] = useState("");
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [phone,setPhone] = useState("")
  const [subject,setSubject] = useState<[] | string |any>([])
  const [country,setCountry] = useState("")
  const [countryCode,setCountryCode] = useState<any | string>("376")
  const [language,setLanguage] = useState<[] |  string |any>([])
  const [chargePerHour,setChargePerHour] = useState("")
  const [email, setEmail] = useState("")
  const [educationLevel, setEducationLevel] = useState("Tertiary")
  const [wordCount, setWordCount] = useState(0);
  const [isLoading,setIsLoading] = useState(false)
  let countryList = countryCodes.customList('countryNameEn')
  countryList = Object.keys(countryList)
  const handleChange = (event: any) => {
   console.log(event)
    if (event) {
      const url = URL.createObjectURL(event);
        setImageUrl(url);
      setImage(event);
    }
  };
// console.log(cCode)

  const fileTypes = ["JPEG", "PNG", "GIF"];
useEffect(() => {
  userOBJ.get_user_account().then((res:any) => {
setLastName(res.fullname.split(' ')[0])
setFirstName(res.fullname.split(' ')[1])
    setEmail(res.email)
    setChargePerHour(res.chargePerHour)
    setCountryCode(res.countryCode)
    setCountry(res.country)
    setEducationLevel(res.educationLevel)
    setBio(res.bio)
    setImageUrl(res.photo)
    setPhone(res.phone)
    setSubject(res.subject.split(','))
    setLanguage(res.language.split(','))
    // console.log(res)
 })
}, [])

  const handleWordChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setBio(newText);
    setWordCount(newText.split("").length);
    // set
  };

  const navigate = useNavigate()
  const handleSubmit = async (e: any) => {
    const formData = new FormData()
    e.preventDefault()
    setIsLoading(!isLoading)
    const payload:any = {
      email, fullname: `${lastName} ${firstName}`, subject:subject.join(','), language:language.join(','), countryCode, country,
      educationLevel,chargePerHour,bio,phone,image
    }
    formData.append('payload', JSON.stringify(payload))
    formData.append('document', image)

    await userOBJ.update_user_profile(formData).then((res:any) => {
      if (res.status) {
        toast.success(res.message)
        navigate('/')
      } else {
        toast.error(res.message)
         setIsLoading(false);
      }
    })
  }
  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit}  style={{ flexDirection: "column", width: "100%" }} >
      <Flex
        style={{
          gap: "10px",
          color: "#000",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <label>Name</label>
        <Input required placeholder="First Name" value={firstName} onChange={ (e)=>setFirstName(e.target.value)} />
        <Input required placeholder="Last Name"  value={lastName} onChange={ (e)=>setLastName(e.target.value)}/>
      </Flex>
      <Flex
        style={{
          gap: "10px",
          color: "#000",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <label>Email</label>
        <Input required placeholder="" type={email}  value={email} onChange={ (e)=>setEmail(e.target.value)} />
      </Flex>
      <Flex
        style={{
          gap: "10px",
          color: "#000",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <label>
          Your Photo
          <br />{" "}
          {imageUrl && (
            <span style={{ fontSize: "12px", color: "#464646cc" }}>
              This will be dispayed on your profile
            </span>
          )}
        </label>
        {(imageUrl ) && (
          <img
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "100%",
            }}
            src={imageUrl}
            alt="Uploaded file"
          />
        )}
        {/* <Input required
          type="file"
          accept="image/png,image/jpeg"
          id="image-upload"
          maxLength={5242880}
          onChange={handleChange}
        /> */}
        <FileUploader
        multiple={false}
          handleChange={handleChange}
          maxSize={5242880}
        name="file"
          types={fileTypes}
          label="Click to upload or drag and drop .jpeg,.png (30mb file size)"
      />
      </Flex>
      <Flex
        style={{
          gap: "10px",
          color: "#000",
          alignItems: "center",
          padding: "10px 0",
        
        }}
      >
        <label>Subject</label>
        <Select value={subject.join(',')} onChange={(e:any)=>subject.includes(e.target.value) ? null: setSubject(subject.concat(e.target.value))}>
          <option selected>{subject.length <1 ?"Select one or more subject":subject.length <3? subject?.join(',') : `${subject[0]} and other ${subject.length -1} selected`}</option>
          <option value={"English"}>English</option>
          <option value={"Mathematics"}>Mathematics</option>
          <option value={"Physics"}>Physics</option>
          <option value={"Chemistry"}>Chemistry</option>
          <option value={"French"}>French</option>
        </Select>
      </Flex>
      {subject?.length >0 && <Flex
        style={{
          gap: "10px",
          color: "#000",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <label style={{visibility:'hidden'}}>output</label>
         {subject?.map((el:string, i:number) => {
           return <Identifier>
             {el}
             <span onClick={() => {
               setSubject(subject.filter((ele: any) => ele !== el))
               subject.splice(subject.indexOf(el),1)
             }}>&times;</span>
           </Identifier>
      })}
      </Flex>}
      <Flex
        style={{
          gap: "10px",
          color: "#000",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <label>Country</label>
        <Select value={country} onChange={(e) => {
          setCountry(e.target.value)
          setCountryCode(getCountryCode(cCode, e.target.value))
        }}>
          {countryList?.map((el:any,i:any) => {
            return <option value={el} key={i}> {el}</option>
         })}
        </Select>
      </Flex>
      <Flex
        style={{
          gap: "10px",
          color: "#000",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <label>Country Code</label>
        <Input required placeholder="" value={countryCode} readOnly/>
      </Flex>
      <Flex
        style={{
          gap: "10px",
          color: "#000",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <label>Phone Number</label>
        <Input required placeholder="" value={phone} onChange={ (e)=>setPhone(e.target.value)} />
      </Flex>
      
      {
        getStoredClientUser().userType == "Tutor" ? <>
        <Flex
        style={{
          gap: "10px",
          color: "#000",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <label>Language</label>
        <Select  value={language.join(',')} onChange={(e:any)=>language.includes(e.target.value) ? null: setLanguage(language.concat(e.target.value))}>
          <option selected>{language.length <1 ?"Select one or more language":language.length <3? language?.join(',') : `${language[0]} and other ${language.length -1} selected`}</option>
              <option value={"English"}>English</option>
          <option value={"Yoruba"}>Yoruba</option>
          <option value={"French"}>French</option>
          <option value={"Pidgin"}>Pidgin</option>
        </Select>
      </Flex>
      <Flex
        style={{
          gap: "10px",
          color: "#000",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <label>Set Price (/hr)</label>
        <Input required placeholder="300" value={chargePerHour} onChange={(e:any)=>setChargePerHour(e.target.value)} />
      </Flex>
      <Flex
        style={{
          gap: "10px",
          color: "#000",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <label>Bio</label>
        <Box
          style={{
            width: "100%",
            borderRadius: "5px",
            border: "0.3px solid #eee",
            padding: "10px 0",
          }}
        >
          <TextArea
            onChange={handleWordChange}
            value={bio}
            maxLength={255}
            placeholder="Enter your bio here"
          />
          <p style={{ fontSize: "10px", color: "#464646cc", textAlign: "end" }}>
            {255 - Number(wordCount)} characters left{" "}
          </p>
        </Box>
      </Flex>
        </> : <>
        <Flex
        style={{
          gap: "10px",
          color: "#000",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <label>Education Level</label>
              <Select onClick={(e: any) =>  setEducationLevel(e.target.value) } value={educationLevel}>
          <option value={"Tertiary"}>Tertiary</option>
          <option value={"Secondary"}>Secondary</option>
        </Select>
            </Flex>
            
        </>
      }
      <Flex
              style={{
                gap: "10px",
                width: "100%",
                justifyContent: "end",
              }}
            >
              <ActionButton
                style={{
                  color: "rgb(241, 94, 56)",
                }}
                onClick={()=>navigate(-1)}
              >
                {" "}
                Cancel
              </ActionButton>
              <ActionButton
                style={{
                  backgroundColor: "rgb(241, 94, 56)",
                  color: "#fff",
          }}
          disabled={isLoading}
                type="submit"
              >
                {isLoading ? <Spinner isLoading={isLoading} /> : "Save"}
              </ActionButton>
            </Flex>
    </form>
  );
}