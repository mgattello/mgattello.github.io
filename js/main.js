$(function(){
    $("#show-more").on("click", ()=>{
            $(".more").show();
            $("#show-more").hide();
        }
    );

    // Colors and reset
    let Green = '\x1b[32m%s\x1b[1m';
    let Red = "\x1b[31m%s\x1b[1m";
    let Blue = "\x1b[34m%s\x1b[1m";
    
    // Texts
    let intro = `Hey, it seems you found a small egg! As a reward I'm going to tell a little bit more about myself, so get ready because this is starting to be personal!\n\n`;
    let hobbies = `Here there are my hobbies and what I do in my spare time: \n\n`;
    let text1 = `Of course! I enjoy to code and solve problems, learn new techniques and create new tools. Be a developer for me is more a passion than a job! \n\n`;
    let text2 = `Rendering models on the PC and make them alive is a very satisfying activity. I solved a lot of small problems using my Ender 3 PRO. \n\n`;
    let text3 =`Mainly characters models from Warhammer 40k, if you ask me I will show you some pics. I am very proud of my miniatures/. \n\n`;
    let text4 =`In spite of my hobbies, I am a Gym-Guy (GG, if you got it you are funny!). I used to be a professional Cyclist in Italy and after I quit I decided to try Calisthenics. Do not ask me to do a flag in the office; I could be overconfident about it!\n\n`;
    let text5= `Photography: I have a DSLR Sony A7 at home that I like to bring with me outside. I'm not a PRO but I find photography interesting! \n\n`;
    let text6 =`I used to play with my Grandfather. He teched me how to play. Since then I like to play it once a while! \n\n`;
    
    // Bullet/title
    let value1 = 'Coding:';
    let value2 = '3D Printing:';
    let value3 = 'Painting:'
    let value4 = 'Gym:';
    let value5 = 'Photography:';
    let value6 = 'Chess:';
    let dropTheMike= 'And out!';
    console.log(intro + hobbies);
    console.log(Green, value1, text1);
    console.log(Blue, value2, text2);
    console.log(Red, value3, text3);
    console.log(Green, value4, text4);
    console.log(Blue, value5, text5);
    console.log(Red, value6, text6);
    console.log(dropTheMike);
})