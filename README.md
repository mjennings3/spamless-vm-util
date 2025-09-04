# Spamless Voicemail Message Utility

## What is it?
The purpose of this tool is to concatenate audio files so that the user may add Special Information Tones (SIT) functionality to their voicemailbox message.

I have only looked at the potential for using Intercept (IC) code to dissuade robocallers from connecting your call, and from further harassment. I understand that most "robocallers" these days are acktually using VoIP, and may disregard SIT for internet-available data.
In spite of such big-brained preemtion I have heard stories of success with this, and look forward to trying it on my own voicemail!

A more complete list of SIT can be found [**here**](https://en.wikipedia.org/wiki/Special_information_tone#Example_recordings_and_encoding_scheme) [Wikipedia].

## How do I use it?
This is not a user-friendly tool at the moment. You can explore the included **Files** directory to get an idea of what's going on.

You must simply add your own VM recording as "vmmsg.mp3" to the **Files** folder, then run **index.js**. Your new Spamless voicemail file will appear in the project root directory.

From here you can play the file out loud into your phone while you record your voicemailbox message. If you don't know how to do that, here's a [**Reddit post**](https://www.reddit.com/r/iphone/comments/12fonbl/how_do_i_change_my_voicemail_name_greeting/) you may find helpful.

I will make a web app for this in a future iteration.
