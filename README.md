# ClickMeetingLoginScript
The script allows you to automatically complete meetings data on the clickmeeting login page. Automaticlly fill our e-mail, name and surname and password matched to the recognized lecture. You can fill login form with one click on the bookmark bar.

# Before you start using the script: 

##### Customize code to your needs: 
 - Complete the variables nickname and mail (`line 2 in ./main.js`) 
 - Add as many lectures as you need to array in `line 4 in ./main.js`. Lectures syntax example:

    ```js
    const lectures = [
        { name: `lecture1`, pass: `password` },
        { name: `lecture4`, pass: `Pass21` },
        { name: `math`, pass: `math2022` },
        { name: `PIO`, pass: `student` }
    ]
    ```
    
#####  Add bookmarklet to your bookmark bar:
 - Copy the script and paste here https://mrcoles.com/bookmarklet/ to create bookmarklet code. 
 - Create empty bookmark in browser.
 - Edit bookmark URL by pasting generated bookmarklet code

# Enjoy!
