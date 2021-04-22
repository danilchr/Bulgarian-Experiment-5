PennController.ResetPrefix(null) // Shorten command names (keep this line here)
//AddHost("http://sabotin.ung.si/~astepanov/SLO_COMP_audio/")
//AddHost("http://sabotin.ung.si/~astepanov/ru_wh_pictures/")

AddHost("https://sabotin.ung.si/~dk0035/")

//PreloadZip("https://sabotin.ung.si/~dk0035/zipped_stimuli_mono.zip")
//PreloadZip("zipped_stimuli_mono.zip")

var progressBarText = "прогрес"


var id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c=>{
  const r = Math.random() * 16 | 0,v = c == 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16);
})
Header(
  // void
)
.log("uniqueID", id)

//Sequence("finished")
Sequence("intro", "intro1",  "demo", "trials",  "demo1",  "demo2", "expbegin", sepWith("sendAsync", randomize("experiment")), "Sync", SendResults(), "bye")



////Sequence("intro", "intro1", "trials",  "demo1",  "demo2", "expbegin", sepWith("sendAsync", randomize("experiment")), "Sync", SendResults(), "bye")


////Sequence("expbegin", sepWith("sendAsync", randomize("experiment")))


////Sequence("intro", "intro1", "intro2", "trials")
////("intro", "trials")

////Sequence("intro", "intro1", "demo",  "trials", "demo1",  "demo2","expbegin", sepWith("sendAsync", randomize("experiment")) ok 
/////Sequence("intro", "intro1", "trials","demo1",  "demo2","expbegin", sepWith("sendAsync", randomize("experiment")))

/////////InitiateRecorder("https://vecjezicnost.ung.si/media_rec/mediarec.php", "")

InitiateRecorder("https://vecjezicnost.ung.si/BGexp1/mediarec.php", "Моля, регулирайте настройките на своя браузър, за да разрешите достъп до микрофона. След това натиснете връзката по-долу.")
//InitiateRecorder("http://sabotin.ung.si/~dk0035/tests", "Това е само тест. Не използвайте това при реалния експеримент, защото резултатите НЯМА да бъдат изпратени към сървъра.")
    .label("intro")

UploadRecordings("sendAsync", "noblock")
UploadRecordings("Sync")

    let replaceConsentMic = ()=>{
            let consentLink = $(".PennController-PennController a.Message-continue-link");
            if (consentLink.length > 0 && consentLink[0].innerHTML.match(/^By clicking this link I understand that I grant this experiment's script access to my recording device/))
                consentLink.html("Давам съгласието си за използване на микрофона и за записване на гласа ми в този експеримент. ");
            else
                window.requestAnimationFrame( replaceConsentMic );
    };
    window.requestAnimationFrame( replaceConsentMic );



newTrial( "finished" ,
   exitFullscreen()
   ,
   newText("Благодарим Ви за интереса. Този експеримент приключи.")
       .css("width","40em")
       .css("padding-top","10%")
       .css("line-height","1.4")
       .print()

    ,
    newButton("")
        .print()
        .wait()
        
       )
       




newTrial("intro1",

	newText("Здравейте! В рамките на изследователски проект в Университета в Нова Горица, Словения и Университета в Женева, Швейцария изследваме как носителите на езика устно обработват изречения с различна дължина и сложност.")
	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()

	,

	newText("Експериментът отнема около 25 минути. Предоставените от Вас данни ще бъдат използвани само за целите на това научно изследване и няма да бъдат разпространявани неправомерно.")
	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
	,
        
	
	newText("Вашата задача е да изслушате незавършени изречения, след това да ги довършите, като произнесете само последната дума. Всяко изречение може да се изслуша само веднъж.")
	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
	,


	
	newText(`<i>Пример</i>:<br>
Вие чувате: Мартин беше построил красиви пясъчни<br>
Зададена дума: <i>замък</i><br>
Вие произнасяте: <i>замъци</i>`)
 	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()

	,
      
	newText("Моля, използвайте формите, които звучат най-добре за Вас, когато завършвате изреченията. Следвайте интуицията си, без да обмисляте отговора си при изпълнението на задачата и без да използвате помощ от други източници.")
	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
	,
      
     
	
	newText("Докато произнасяте последната дума, ще трябва да запишете гласа си, като използвате микрофона на компютъра си. За да запишете отговора си, натиснете върху бутон „Запис“. За да спрете записа, натиснете върху бутона „Стоп“.")
	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
	,

	newText("За да можете да запишете гласа си, ще Ви е нужен работещ микрофон. Преди да продължите по-нататък с експеримента, моля, пробвайте да запишете и изслушате своя глас, за да се уверите, че всичко работи, както трябва.")
	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
	,

  newMediaRecorder("test0_recording_"+id, "audio")
          .center()
          .print()
          .log()
          
    ,
 
	  newButton("continue_to_questionaire", "Продължете нататък")
	   .color("red")
       .center()
       .print()
        .wait()
        .log()
	
 
   
  ).setOption("hideProgressBar",true)

,

    
newTrial("demo", 


    newHtml("demographics", "ru_wh_demo.html")
    .css("padding-top","10%")
    .css("line-height","1.4")
    .checkboxWarning("Моля, изберете една от възможностите.")
    .inputWarning("Моля, попълнете това поле.")
    .radioWarning("Моля, изберете една от възможностите.")
        .settings.log()
	    .log("uniqueID", id)
        .print()
            
            

    ,
     newButton("continue_to_examples", "Продължете нататък")
       .color("red")
       .center()
       .print()
       .wait( 
           getHtml("demographics").test.complete()
              .failure( getHtml("demographics").warn() )
           )
        .log()
       ).setOption("hideProgressBar",true)
    ,
    
  

         
        

newTrial ("trials",
	


	newText("Ще започнем с две примерни изречения, за да добиете представа за задачата. След тях започва настоящият експеримент.")
	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
	,

	
  newButton("continue_to_example_1", "Продължете с пример 1")
          .color("red")
          .print()
          .center()
          .wait()
          .log()
          
          ).setOption("hideProgressBar",true)
,



newTrial ("demo1", 

 newText("Пример 1:")
 	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
    
    ,
    newButton("listen_to_example_1", "Изслушайте изречението")
    .css("line-height","1.4")
    .center()
    .print()
    .wait()
    .log()
    ,




    newAudio("test1_audio", "unzipped_stimuli_mono/Training_STE-001_mono.wav")
         .play()
         .wait()
    ,
    
    newTimer("wait", 500)
    .start()
    .wait()
    ,

    newText("")
    .print()
    ,
    
    newText("<p style=\"font-size:18pt\">кон</p>")
    .css("line-height","1.4")
    .css("padding-top","5%")
    .center()
    .print()
    ,
    

    

//  newText("instructions", "Моля, повторете и довършете изречението, като поставите думата по-горе в подходящата форма и запишете отговора си:")
//          .print()
//          .center()
//          .css("padding-bottom","20px")
//          .css("padding-top","20px")


  newText("instructions", "Моля, довършете изречението, като поставите думата по-горе в подходящата форма и запишете отговора си:")
          .print()
          .center()
          .css("padding-bottom","20px")
          .css("padding-top","20px")


//	newAudio("myAudio", "http://myserver/audio.mp3")
      ,

     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
      ,
  
      newMediaRecorder("test1_recording_"+id, "audio")
          //.print()
          .log()
          .center()
          .once()
         
          
         ,
      
    newButton("Запис")
        .print()
        .wait()
        .remove()
        
    ,

    getMediaRecorder("test1_recording_"+id)
        .record()
        
    ,

    newButton("Стоп")
        .print()
        .wait()
        .remove()
        
    ,

    getMediaRecorder("test1_recording_"+id)
        .stop()
        
    ,
      
     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
     
      ,
      
     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
      ,
      
      newButton("continue_to_example_2", "Продължете с пример 2")
          .color("red")
          .print()
          .center()
          .wait()
          .log()
).setOption("hideProgressBar",true)
,

newTrial("demo2", 

 newText("Пример 2:")
 	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
    ,
    
    newButton("listen_to_example_2", "Изслушайте изречението")
    .css("line-height","1.4")
    .center()
    .print()
    .wait()
    .log()
    ,


    newAudio("test2_audio", "unzipped_stimuli_mono/Training_STE-002_mono.wav")
         .play()
         .wait()
    ,
    newTimer("wait", 500)
    .start()
    .wait()
    ,


    newText("")
    .print()
    ,
    

    newText("<p style=\"font-size:18pt\">крава</p>")
    .css("line-height","1.4")
    .center()
    .css("padding-top","5%")
    .print()
    ,


//  newText("instructions", "Моля, повторете и довършете изречението, като поставите думата по-горе в подходящата форма и запишете отговора си:")
//          .print()
//          .center()
//          .css("padding-bottom","20px")
//          .css("padding-top","20px")


  newText("instructions", "Моля, довършете изречението, като поставите думата по-горе в подходящата форма и запишете отговора си:")
          .print()
          .center()
          .css("padding-bottom","20px")
          .css("padding-top","20px")

//	newAudio("myAudio", "http://myserver/audio.mp3")
      ,

     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
      ,
  
      newMediaRecorder("test2_recording_"+id, "audio")
          //.print()
          .log()
          .center()
          .once()
      ,
      
     newButton("Запис")
        .print()
        .wait()
        .remove()
        
    ,

    getMediaRecorder("test2_recording_"+id)
        .record()
        
    ,

    newButton("Стоп")
        .print()
        .wait()
        .remove()
        
    ,

    getMediaRecorder("test2_recording_"+id)
        .stop()
        
    ,
      
     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
      ,
      

      newButton("continue_to_experiment", "Продължете с експеримента")
          .color("red")
          .print()
          .center()
          .wait()
          .log()

).setOption("hideProgressBar",true)

,

newTrial ("expbegin",
	
      newText("Сега сме готови да започнем с основния експеримент.")
	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
	,

      newButton("begin_experiment", "Започнете експеримента")
          .color("red")
          .print()
          .center()
          .wait()
          .log()
).setOption("hideProgressBar",true)
,

Template("design_final.csv",
      variable => newTrial("experiment",

    fullscreen()
        ,
    
    newTimer(500)
        .start()
        .wait()
    ,


    newButton("listen_to_sentence", "Изслушайте изречението")
    .css("line-height","1.4")
    .center()
    .print()
    .wait()
    .log()
    ,


    newAudio("target", "unzipped_stimuli_mono/"+variable.PathOfAudioFile)
         .play()
         .wait()
    ,
    newTimer("wait", 500)
    .start()
    .wait()
    ,


    newText("")
    .print()
    ,
    
    newText("<p style=\"font-size:18pt\">"+variable.BaseFormOfTargetNoun+"</p>")
    .css("line-height","1.4")
    .css("padding-top","5%")
    .center()
    .print()
    ,

    


  newText("instructions", "Моля, довършете изречението, като поставите думата по-горе в подходящата форма и запишете отговора си:")
          .print()
          .center()
          .css("padding-bottom","20px")
          .css("padding-top","20px")

//	newAudio("myAudio", "http://myserver/audio.mp3")
      ,

     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
      ,
  

          
        newMediaRecorder(variable.OutputAudioFile+"_"+id, "audio")
          //.print()
          .log()
          .center()
          .once()
      ,
      
     newButton("Запис")
        .print()
        .wait()
        .remove()
        
    ,

    getMediaRecorder(variable.OutputAudioFile+"_"+id)
        .record()
        
    ,

    newButton("Стоп")
        .print()
        .wait()
        .remove()
        
    ,

    getMediaRecorder(variable.OutputAudioFile+"_"+id)
        .stop()
        
      ,
      
     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
      ,
      
      newButton("continue_with_next_sentence", "Продължете със следващия пример")
          .color("red")
          .print()
          .center()
          .wait()
          .log()
  
  
  ).setOption("hideProgressBar",false)
  .log("Type",variable.Type)
  .log("Condition Label",variable.ConditionLabel)
  .log("Numeral",variable.Numeral)
  .log("Target Noun",variable.BaseFormOfTargetNoun)
  .log("Final Sentence",variable.FinalSentence)
  .log("Target Noun",variable.BaseFormOfTargetNoun)
  .log("Group",variable.Group)
  .log("Audio File",variable.TargetAudioFile)
  .log("uniqueID", id)
  .log("Output Audio File",variable.OutputAudioFile+"_"+id)
  .log("Plural Form of Target Noun",variable.PluralFormOfTargetNoun)
  .log("Count Form of Target Noun",variable.CountFormOfTargetNoun)
  .log("Other Plural Form of Target Noun",variable.OtherPluralForm)
  




  )
,
  
newTrial( "bye" ,
   exitFullscreen()
   ,
   newText("Това е краят на екперимента. Благодарим Ви за участието! Ако имате въпроси относно експеримента, може да се обърнете по електронна поща към професор Артур Степанов 'arthur.stepanov@ung.si', професор Пенка Статева 'penka.stateva@ung.si' или Данил Христов 'danil.khristov@ung.si'.")
       .css("width","40em")
       .css("padding-top","10%")
       .css("line-height","1.4")
       .print()

  //  ,  
  // newButton()
      .wait()  // Wait for a click on a non-displayed button = wait here forever
          ).setOption("hideProgressBar",true)


DebugOff();
//.setOption("showProgressBar ",false)
//.setOption( "countsForProgressBar" , false )
// Make sure the progress bar is full upon reaching this last (non-)trial

