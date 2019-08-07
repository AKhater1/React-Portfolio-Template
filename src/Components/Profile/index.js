import React , {useState , useEffect} from 'react'
import { ProfileSkills , SkillsProfile , ProfileList , ProfileItem , ItemSpan , SpanWeb , Skills , SkillsDesc , SkillsBar , BarTitle , BarPerc , BarParent , ParentSpan , ProfileTitle , SkillsTitle , ProfileTitleSpan , SkillsTitleSpan } from './style.js'
import axios from 'axios'

const Profile = () => {

    const [ skills , setSkills ] = useState([])

    useEffect ( () => {
        axios.get('js/data.json') .then ( res => { setSkills (res.data.skills) } )
    }, [])

    const SkillsData = skills.map( (skillItem) => {
        return (
            <SkillsBar key={skillItem.id}>
                <BarTitle>{skillItem.title}</BarTitle>
                <BarPerc>{skillItem.percentage}</BarPerc>
                <BarParent>
                    <ParentSpan className={skillItem.width}></ParentSpan>
                </BarParent>
            </SkillsBar>
        )
    })
  
    return (
        <ProfileSkills>
            <div class="container">
                <SkillsProfile>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <ItemSpan>Name</ItemSpan>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Birthday</ItemSpan>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Address</ItemSpan>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Phone</ItemSpan>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Email</ItemSpan>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Website</ItemSpan>
                            <SpanWeb>www.google.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </SkillsProfile>
                
                <Skills>
                    <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                    <SkillsDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    
                    {SkillsData}
                </Skills>
                
            </div>
        </ProfileSkills>
    );
  
}

export default Profile;
