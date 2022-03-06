class ProfilePic {
    constructor(url, artist){
        this.url = url;
        this.artist = artist;
    }
}

const profilePics = [];
profilePics.push(new ProfilePic("img/profile-pics/profilePic1.png", "Me!"));
profilePics.push(new ProfilePic("img/profile-pics/profilePic2.png", ""));
profilePics.push(new ProfilePic("img/profile-pics/profilePic3.png", ""));
profilePics.push(new ProfilePic("img/profile-pics/profilePic4.png", ""));

randomPicNumber= Math.floor(Math.random() * profilePics.length);

document.getElementById("profilePic").src=profilePics[randomPicNumber].url;
