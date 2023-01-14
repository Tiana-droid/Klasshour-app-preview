import React, { useEffect, useState } from "react";
import { Flex, Input, Select, TextArea, Box, ActionButton,Identifier, AddBtn } from "./Styles";
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
export default function Details() {
  const countryCodes = require('country-codes-list')
  let cCode = countryCodes.customList('countryCallingCode')
  const [image, setImage] = useState<File | null |any>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [bio, setBio] = useState("");
  const [firstName,setFirstName] = useState("")
  const [text,setText] = useState("")
  const [lastName,setLastName] = useState("")
  const [phone,setPhone] = useState("")
  const [subject,setSubject] = useState<[] | string |any>([])
  const [country,setCountry] = useState("")
  const [countryCode,setCountryCode] = useState<any | string>("376")
  const [language,setLanguage] = useState<[] |  string |any>([])
  const [chargePerHour,setChargePerHour] = useState("")
  const [email, setEmail] = useState("")
  const [educationLevel, setEducationLevel] = useState("Tertiary")
  const [enrolled, setEnrrolled] = useState("")
  const [institution, setInstitution] = useState("")
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
    setInstitution(res.institution)
    setEnrrolled(res.enrolled)
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
      educationLevel,chargePerHour,bio,phone,imageUrl
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
        <Input required placeholder="First Name" value={firstName} readOnly />
        <Input required placeholder="Last Name"  value={lastName} readOnly/>
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
        <Input required placeholder="" type={email}  value={email} readOnly />
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
        <label>Add Subject</label>
            <Input value={text} onChange={(e)=>setText(e.target.value)}/>
            <AddBtn type="button" onClick={() => {
              setText("")
              return subject.includes(text.toLowerCase()) ? null : setSubject(subject.concat(text.toLowerCase()))
            }}>Add</AddBtn>
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
        <label>Language</label>
        <Select  value={language.join(',')} onChange={(e:any)=>language.includes(e.target.value) ? null: setLanguage(language.concat(e.target.value))}>
          <option selected>{language.length <1 ?"Select one or more language":language.length <3? language?.join(',') : `${language[0]} and other ${language.length -1} selected`}</option>
              <option value={"English"}>English</option>
          <option value={"Yoruba"}>Yoruba</option>
          <option value={"French"}>French</option>
          <option value={"Pidgin"}>Pidgin</option>
        </Select>
          </Flex>
          {language?.length >0 && <Flex
        style={{
          gap: "10px",
          color: "#000",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <label style={{visibility:'hidden'}}>output</label>
         {language?.map((el:string, i:number) => {
           return <Identifier>
             {el}
             <span onClick={() => {
               setLanguage(language.filter((ele: any) => ele !== el))
               language.splice(language.indexOf(el),1)
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
              <Select onChange={(e: any) =>  setEducationLevel(e.target.value) } value={educationLevel}>
          <option value={"Tertiary"}>Tertiary</option>
          <option value={"Secondary"}>Secondary</option>
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
        <label>Are you enrolled in an instution?</label>
              <Select onChange={(e: any) => setEnrrolled(e.target.value)} value={enrolled}>
          <option value={"No"} >No</option>
          <option value={"Yes"}>Yes</option>
        </Select>
            </Flex> 
            {enrolled==="Yes" &&   <Flex
        style={{
          gap: "10px",
          color: "#000",
          alignItems: "center",
                padding: "10px 0",
          display: enrolled==="Yes" ? "flex":"none"
        }}
      >
              <label >Institution:</label>
              {/* <Input  onChange={(e: any) =>  setEnrrolled(e.target.value) } value={enrolled} /> */}
                <Input className="form-control" name="university" list="university" onChange={(e: any) =>  setInstitution(e.target.value) } value={institution} / >
                    <datalist id="university">
                      <option value="Abia State University"/>
                      <option value="Abubakar Tafawa Balewa University"/>
                      <option value="Achievers University, Owo"/>
                      <option value="Adamawa State University"/>
                      <option value="Adekunle Ajasin University"/>
                      <option value="Adeleke University"/>
                      <option value="Afe Babalola University"/>
                     
                      <option value="Ahmadu Bello University"/>
                      <option value="Ajayi Crowther University"/>
                      <option value="Akwa Ibom State University"/>
                      <option value="Al-Hikmah University"/>
                      <option value="Al-Qalam University, Katsina"/>
                      <option value="Ambrose Alli University"/>
                      <option value="American University of Nigeria"/>
                  
                    
                      <option value="Babcock University"/>
                      <option value="Bauchi State University"/>
                      <option value="Bayero University Kano"/>
                      <option value="Baze University"/>
                      <option value="Bells University of Technology"/>
                      <option value="Benson Idahosa University"/>
                      <option value="Benue State University"/>
                      <option value="Bingham University"/>
                      <option value="Borno State University"/>
                      <option value="Bowen University"/>
                      <option value="Caleb University"/>
                      <option value="Caritas University"/>
                      <option value="Chrisland University"/>
                      <option value="Chukwuemeka Odumegwu Ojukwu University"/>
                      <option value="Clifford University"/>
                      <option value="Coal City University"/>
                      <option value="Covenant University"/>
                      <option value="Crawford University"/>
                      <option value="Crescent University, Abeokuta"/>
                      <option value="Cross River University of Technology"/>
                      <option value="Crown Hill University"/>
                      <option value="Delta State University, Abraka"/>
                      <option value="Dominican University, Ibadan"/>
                      <option value="Eastern Palm University"/>
                      <option value="Ebonyi State University"/>
                      <option value="Edo University"/>
                      <option value="Edwin Clark University"/>
                      <option value="Ekiti State University, Ado Ekiti"/>
                      <option value="Eko University of Medical and Health Sciences"/>
                      <option value="Elizade University"/>
                      <option value="Enugu State University of Science and Technology"/>
                      <option value="Evangel University Akaeze"/>
                      <option value="Federal University of Agriculture, Abeokuta"/>
                      <option value="Federal University of Petroleum Resources"/>
                      <option value="Federal University of Technology, Akure"/>
                      <option value="Federal University of Technology, Minna"/>
                      <option value="Federal University of Technology, Owerri"/>
                      <option value=" Federal University, Birnin Kebbi"/>
                      <option value="Federal University, Dutse"/>
                      <option value="Federal University, Dutsin-Ma"/> 
                      <option value="Federal University, Gashua"/>
                      <option value="Federal University, Gusau"/>
                      <option value="Federal University, Kashere"/>
                      <option value="Federal University, Lafia"/>
                      <option value="Federal University, Lokoja"/>
                      <option value="Federal University, Ndufu-Alike "/>  
                      <option value="Federal University, Otuoke"/>
                      <option value="Federal University, Oye-Ekiti"/>
                      <option value="Federal University, Wukari"/>
                      <option value="Fountain University"/>
                      <option value=" Gombe State University"/>
                      <option value="Gombe State University of Science and Technology"/>
                      <option value="brahim Badamasi Babangida University"/>
                      <option value="Igbinedion University Okada"/>
                      <option value=" Imo State University"/>
                      <option value=" Kaduna State University"/>
                      <option value="Kano University of Science and Technology"/>
                      <option value="Kebbi State University of Science and Technology"/>
                      <option value=" Kings University"/>
                      <option value="Kogi State University"/>
                      <option value="Kwara State University"/>
                      <option value="Ladoke Akintola University of Technology"/>  
                      <option value=" Lagos State University"/>
                      <option value=" Landmark University"/>
                      <option value=" Lead City University"/>
                      <option value="Madonna University, Okija"/>
                      <option value="Nasarawa State University"/>
                      <option value=" Niger Delta University"/>
                      <option value="Nile University of Nigeria"/>
                      <option value="Nnamdi Azikiwe University"/>
                      <option value="Northwest University Kano"/>
                      <option value="Obafemi Awolowo University"/>
                      <option value="Ondo State University of Science and Technology"/>
                      <option value="Osun State University"/>
                      <option value="Pan African University"/>
                      <option value="Plateau State University"/>
                      <option value=" Redeemer's University"/>
                      <option value="Rivers State University of Science and Technology"/>
                      <option value="Sokoto State University"/>
                      <option value=" Taraba State University"/>  
                      <option value="Umaru Musa Yar'Adua University"/>
                      <option value="University of Abuja"/>
                      <option value=" University of Africa"/>
                      <option value="University of Agriculture, Makurdi"/>
                      <option value="University of Benin"/>  
                      <option value="University of Calabar"/>
                      <option value="University of Ibadan"/>
                      <option value="University of Ilorin"/>
                      <option value="University of Jos"/>
                      <option value="University of Lagos"/>
                      <option value="University of Maiduguri"/>
                      <option value="University of Medical Sciences"/>
                      <option value="University of Nigeria"/>
                      <option value="University of Port Harcourt"/>
                      <option value="University of Uyo"/>
                      <option value="Usmanu Danfodio University"/>
                      <option value="Veritas University"/>
                      <option value="Western Delta University"/>
                      <option value="Yobe State University"/>
                    </datalist>
            </Flex>
            }
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