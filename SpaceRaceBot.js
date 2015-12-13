// ==UserScript==
// @name         QuizletBot
// @namespace    http://pixelzerg.github.io/
// @version      0.1
// @description  Quizlet Space Race
// @author       PixelZerg
// @include      *
// @grant        none
// ==/UserScript==
/* jshint -W097 */
/*eslint-env browser, jquery*/
'use strict';
//var quizbotrunning=true;
var answers = eval((/QTerm.dataToArray\(.*\)/g).exec($('html').html())[0]);
//terms;
$(".value").keydown(function()
{
    if ($(".value").length > 0)
    {
        //	console.log("Translating:"+$(".free").first().children().text());
        $(".value").val(toeng($(".free").first().children().text()));
    }

    function executeAsync(func)
    {
        setTimeout(func, 0);
    }
});

function toeng(s)
{
    var no = 0;
    while (no !== answers.length)
    {
        console.log("comparing: " + answers[no].definition + " and " + s);
        if (s == answers[no].definition)
        {
            console.log("Translation got: " + answers[no].word);
            //		return answers[no+1];
            return answers[no].word;
        }
        no++;
    }
    console.error("mooo!");
    return null;
}