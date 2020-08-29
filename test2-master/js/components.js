const components = {}
components.registerScreen = `
<div class="log-container">
    <div class="symbol absolute">Online Class</div>
    <div class="introduce-text">
        <p>
            Everyone is welcome.
        </p>
        <p>
            Online class Where helps you save time and  always opens for free
        </p>
    </div>
    <div class="main-log-container">
        <div class="img-left">
            <img src="../img/Healthy-Positive-Classroom.jpg" alt="">
        </div>
        <div class="form-log-up">
            <form id="register-form" action="">
                <div class="input-wrap">
                    <input placeholder="First Name" type="text" name="firstName">
                    <div class="error" id="firstName"></div>
                </div>
                <div class="input-wrap">
                    <input placeholder="Last Name" type="text" name="lastName">
                    <div class="error" id="lastName"></div>
                </div>
                <div class="input-wrap">
                    <input placeholder="Email" type="email" name="email">
                    <div class="error" id="email"></div>
                </div>
                <div class="input-wrap">
                    <input placeholder="Password" type="password" name="password">
                    <div class="error" id="password"></div>
                </div>
                <div class="input-wrap">
                    <input placeholder="Confirm Password" type="password" name="confirmPassword">
                    <div class="error" id="confirmPassword"></div>
                </div>
                <div class="check-is-teacher-box">
                    <div class="input-wrap">
                        <div class="check-box">
                            <input type="checkbox" id="isTeacher-input" name='isTeacher'>
                            <label for="isTeacher-input">Teacher</label>
                        </div>
                        <div class="check-box">
                            <input type="checkbox" id="isStudent-input" name='isStudent'>
                            <label for="isStudent-input">Student</label>
                        </div>
                    </div>
                    <div class="error" id="isTeacher"></div>
                </div>
                <div class="row">
                    <span>Do you already have an account? <div id="go-to-login">Login</div> </span>
                    <button class="bnt" type="submit">Logup</button>
                </div>
            </form>
        </div>
    </div>
</div>
`
components.loginScreen = `
<div class="log-container">
    <div class="symbol absolute">Online Class</div>
    <div class="introduce-text">
        <p>
            Everyone is welcome.
        </p>
        <p>
            Online class Where helps you save time and  always opens for free
        </p>
    </div>
    <div class="main-log-container">
        <div class="img-left">
            <img src="../img/Healthy-Positive-Classroom.jpg" alt="">
        </div>
        <div class="form-log-up">
            <form id="login-form" action="">
                <div class="input-wrap">
                    <input placeholder="Email" type="text" name="email">
                    <div class="error" id="email"></div>
                </div>
                <div class="input-wrap">
                    <input placeholder="Password" type="password" name="password">
                    <div class="error" id="password"></div>
                </div>
                <div class="row">
                    <span>You don't have an account? <div id="go-to-logup">Logup</div> </span>
                    <button class="bnt" type="submit">Logup</button>
                </div>
            </form>
        </div>
    </div>
</div>`

components.selectRoomScreen = `
<div class="container">
<div class="nav-bar">
    <div class="symbol">Online Class</div>
    <div class="search-bar">
        <div>
            <input placeholder="Search..." type="text" name="" id="myInput">
            <i class="fas fa-search"></i>
        </div>
    </div>
    <div class="nav-bar-info-User ">
        <div><img src="" alt=""></div>
        <div class="user-name cursor"></div>
        <div class="notification">
            <i class="far fa-envelope"></i>
        </div>
        <div class="new-notification display-none">
                <div class="sub-notification">
                   <div class="owner-notification">
                        <img src="../img/teacher.png">
                   </div>
                  <div class="notification-box">
                        <div>DoHaiNam</div>
                        <div class="content-notification">Hello Boy</div>
                  </div>
                </div>  
            </div>
        <div class="log-out-bnt">
            <i class="fas fa-sign-out-alt"></i>
        </div>
    </div>
</div>
<div class="main-container">
    <div class="left-container">

    </div>
    <div class="right-container">
        <button class="new-room-bnt">Create New Room</button>
        <div class="room-list">

        </div>
    </div>
    <div class="chat-button cursor" id="icon-chat-container"></div>
    <div class="chat-one-to-one-container display-none">
        <button class="top-message-box">chat with dohainamhn3@gmail.com</button>
        <div class="top-input">
            <input type="tex" id="input-chat-email" placeholder="enter email">
        </div>
        <div class="wrap">
            <div class="box-chat">
                <div class="message-box">
                    
                </div>
                <div class="input-message">
                    <input>
                    <div class="icon"></div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
`
components.classRoomScreen = `
<div class="class-room">
  <div class="video-bar">
      <div class="teacher-box " id="video-bar">
          <div class="video" id ="video-teacher">
              <div class="icon" id="icon"></div>
          </div>
          <div class="mic" id="teacher-mic">
              <i class="fas fa-microphone"></i>
          </div>
          <div class="info" id="infoTeacher"> Teacher</div>
      </div>
      <div class="video-student-box" id="video-student-box">

      </div>
  </div>
  <div class="sign-out" id="sign-out">
          <i class="fas fa-sign-out-alt"></i>
  </div>
  <div class="bottom-app ">
    <div class="tool-board ">
        <div class="tool" id="mouse-pointer"><i class="fas fa-mouse-pointer"></i></div>
        <div class="tool" id="hand"><i class="far fa-hand-rock"></i></div>
        <div class="tool" id="pencil"><i class="fas fa-pencil-alt"></i></div>
        <div class="tool" id="square"><i class="far fa-square"></i></div>
        <div class="tool" id="circle"><i class="far fa-circle"></i></div>
        <div class="tool" id="eraser"><i class="fas fa-eraser"></i></div>
        <div class="tool" id="text"><i class="fas fa-text-height"></i></div>
        <div class="tool" id="colorPicker" >
            <label for="pickColor"> 
                <i class="fas fa-palette"></i>
            </label>
            <input type="color" id="pickColor">
        </div>
        <div class="tool" id="newPage"><i class="far fa-file"></i></div>
        <div class="tool" id="uploadTool" >
            <label for="fileInput"> 
              <i class="fas fa-file-upload"></i>
            </label>
            <input type="file" accept="image/png, image/jpeg" id="fileInput"></div>
        </div>
    <div class="load-icon" id="load-icon"><i class="fas fa-spinner fa-spin"></i></div>
    <div class="" id="whiteboard">
    </div>
    <div class="chat-box ">
      <div class="message-container" id="message-container">

      </div>
      <input id="input-chat" placeholder="Enter your message" type="text">
    </div>
  </div>
</div>
`

components.createRoomScreen = `
<div class="container">
<div class="nav-bar">
    <div class="symbol">Online Class</div>

    <div class="nav-bar-info-User">
        <div><img src="data:image/jpeg;base64,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" alt=""></div>
        <div class="notification">
            <i class="far fa-envelope"></i>
        </div>
        <div class="log-out-bnt">
            <i class="fas fa-sign-out-alt"></i>
        </div>
    </div>
</div>
<div class="main" style="padding: 50px 20%;">
    <form id="create-conversation-form">
        <div>
            Create a new room
        </div>
        <div class="input-wrapper">
            <input type="text" placeholder="Room name" name="roomName">
            <div class="error" id="room-name-error"></div>
        </div>
        <div class="input-wrapper">
            <input type="text" placeholder="Title class" name="roomTtitle">
            <div class="error" id="room-title-error"></div>
        </div>
        <div class="input-wrapper">
            <input type="text" placeholder="chanel name" name="chanelName">
            <div class="error" id="room-chanel-error"></div>
        </div>
        <div class="input-wrapper">
        <input type="text" placeholder="password room" name="passwordRoom">
        <div class="error" id="room-password-error"></div>
    </div>
        <button class='btn' type="submit">Save</button>
        <button class='btn btn-light' type="button" id="back-to-chat">Cancel</button>
    </form>
</div>
</div>`
components.updateProfileScreen = `
<div class="container1">
<div class="nav-bar">
    <div class="symbol">Online Class</div>
    <div class="search-bar">
        <div>
            <input placeholder="Search..." type="text" name="" id="">
            <i class="fas fa-search"></i>
        </div>
    </div>
    <div class="nav-bar-info-User">
        <div><img src="" alt=""></div>
        <div class="user-name cursor"></div>
        <div class="notification">
            <i class="far fa-envelope"></i>
        </div>
        <div class="log-out-bnt">
            <i class="fas fa-sign-out-alt"></i>
        </div>
    </div>
</div>
<div class="main-container1">
    <div class="upload-img">
        <div>
            <img src="https://static.thenounproject.com/png/558475-200.png" alt="">
            <label for="upload">
                <i class="fas fa-camera"></i>
            </label>
            <input type="file" accept="image/png ,image/jpeg,image/gif" id="upload" class="display-none">
        </div>
    </div>
    <div class="menu-div">
        <h1 class="title"> Profile</h1>
        <div class="menu-bnt">
            <div>
                <button id="profile-bnt" class="active-bnt">Profile</button>
                <button id="edit-profile-bnt" >Edit profile</button>
                <button id="edit-password-bnt">Edit password</button>
                <button id="view-room-of-current-user">View your room</button>
            </div>
        </div>
    </div>
    <div class="profile-box">
        
    </div>
</div>
</div>
`
components.profileBox = `
<div class="profile-row pd-t-2">
<div class="info-profile">
    <div id="profile-name"></div>
    <div id="profile-email"></div>
</div>
<div class="info-profile">
    <div id="is-teacher"></div>
    <div id="work-at"></div>
</div>
</div>
<div class="about-me-profile">
<label>About Me:</label>
<p id="about-me">
    
</p>
</div>`
components.editProfileBox = `  
<form id="edit-profile-form" >
<div class="update-profile-bnt">
    <button type="submit" class="bnt" id="update-profile-bnt">Update</button>
</div>
<div class="profile-row">
    <div class="input-bar">
       <span class="label">First name</span>
       <input type="text" name="firstName">
    </div>
    <div class="check-is-teacher">
       <div class="inner-check">
           <input type="checkbox" name="isTeacher" id="isTeacher">
           <span class="label">Teacher</span">
       </div>
       <div class="inner-check">
        <input type="checkbox" name="isStudent" id="isStudent">
           <span class="label">Student</span>
       </div>
    </div>
</div>
<div class="profile-row">
<div class="input-bar">
    <span class="label">Last name</span>
    <input type="text" name="lastName">
</div>
<div class="work-at input-bar">
    <span class="label">Work/Study At</span>
    <input type="text" name="workAt">
</div>
</div>
<div class="profile-row">
<div class="profile-column">
    <div class="input-bar">
        <span class="label">Email</span>
        <div class="email-profile"></div>
    </div>
    <div class="input-bar mrt-2">
        <span class="label">Password</span>
        <div class="password-profile">************</div>
    </div>
</div>
    <div class="input-bar about-me">
        <span class="label">About me</span>
        <textarea name="aboutMe"  cols="30" rows="10"></textarea>
    </div>
</div>
</form>`
components.editPasswordBox = `
<form id="reset-password-form">
    <div class="input-bar mr-t-2">
        <span class="label">Current Password</span>
        <input type="password" name="currentPassword">
        <span class="error" id="currentPassword" ></span>
    </div>
    
    <div class="input-bar mr-t-2">
        <span class="label">New Password</span>
        <input type="password" name="password">
        <span class="error" id="password"></span>
    </div>
    <div class="input-bar mr-t-2">
        <span class="label">Confirm Password</span>
        <input type="password" name="confirmPassword">
        <span class="error" id="confirmPassword"></span>
    </div>
    <button type=submit" class="bnt">Confirm</button>
</form>
`
components.viewYourRoom = `

<div class="right-container">
    <button class="new-room-bnt">Create New Room</button>
    <div class="room-list">

    </div>
</div>

`
components.viewYourFriendProfile = `
<div class="container1">
<div class="nav-bar">
    <div class="symbol">Online Class</div>
    <div class="search-bar">
        <div>
            <input placeholder="Search..." type="text" name="" id="">
            <i class="fas fa-search"></i>
        </div>
    </div>
    <div class="nav-bar-info-User">
        <div><img src="" alt=""></div>
        <div class="user-name cursor"></div>
        <div class="notification">
            <i class="far fa-envelope"></i>
        </div>
        <div class="log-out-bnt">
            <i class="fas fa-sign-out-alt"></i>
        </div>
    </div>
</div>
<div class="main-container1">
    <div class="upload-img">
        <div>
            <img src="https://static.thenounproject.com/png/558475-200.png" alt="">
            <label for="upload">
                <i class="fas fa-camera"></i>
            </label>
            <input type="file" accept="image/png ,image/jpeg,image/gif" id="upload" class="display-none">
        </div>
    </div>
    <div class="profile-box">
    <div class="profile-row pd-t-2">
    <div class="info-profile">
        <div id="profile-name"></div>
        <div id="profile-email"></div>
    </div>
    <div class="info-profile">
        <div id="is-teacher"></div>
        <div id="work-at"></div>
    </div>
    </div>
    <div class="about-me-profile">
    <label>About Me:</label>
    <p id="about-me">
        
    </p>
    </div>
    </div>
</div>
</div>
`
components.friendChatMessage=`
<div class="friend-message">
    <img src="../img/teacher.png">
    <div class="message">hellosssssssssssssssssssssssssssssssssss</div>
</div>

`
components.yourChatMessage = `
<div class="your-message">
    <div class="message">aloooooooooooooooooooooooooooooooooooooo</div>
</div>
`