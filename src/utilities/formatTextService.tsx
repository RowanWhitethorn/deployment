import React, { ReactNode } from 'react';
type FormatFunction = (segment: string) => React.ReactNode;
////// this is a function /////////
  function splitString(plainText: string): string[] {
    // Define a regular expression to match the delimiters (`,`, `.`, `;`, `:`) while keeping them in the segments.
    const delimiterRegex = /([;.:,])/g;
  
    // Use the `split` method to split the input string based on the delimiters.
    const segments = plainText.split(delimiterRegex);
  
    // Create an array to hold the final segments with delimiters at the end.
    const result: string[] = [];
  
    // Iterate through the segments and add delimiters to the end of each segment.
    for (let i = 0; i < segments.length; i++) {
      if (i < segments.length - 1) {
        result.push(segments[i] + segments[i + 1]);
        i++; // Skip the next segment since it's already added.
      } else {
        result.push(segments[i]);
      }
    }  
    return result;
  }
/////////////////// 
export function formatTextService(plainText: string): React.ReactNode {
  //create the regular expresions that we need to find the different text inputs to be formated
  const titleRegex = /([A-Za-z\s][^;,.:]*);/;
  const lowerFontTitleRegex = /([A-Za-z\s][^.,;:]*):/;
  const stepsRegex = /([A-Za-z\s][^,.;:]*),/;
  const dotRegex = /([A-Za-z\s][^,.;:]*)./;

  //create the array who store the final result, an array of react nodes
  const formattedText: React.ReactNode[] = [];
  const cleaner = /([^;.:,])/g; 
  let segments = splitString(plainText); // Make segments mutable

  //create the variables who regex the texts segments who match with
  const replaceAndFormattitle = (title: string): React.ReactNode => (
    <div key={`title-${title}`}>
      <strong>{title}</strong>
    </div>
  );
  
  const  replaceAndFormatFonttitle = (lowerFontTitle:string):ReactNode => (
    <div key={`lower-font-title-${lowerFontTitle}`}>
      {lowerFontTitle}:
    </div>
  );

  const replaceAndFormatstep = (step:string):ReactNode => (
    <div key={`step-${step}`}>
      -{step}
    </div>
  );

  const replaceAndFormatdot = (dot: String):ReactNode => (
    <div key={`dot-${dot}`}>
      {dot}.
    </div>
  );
  //
  //iterates over all the segments and it formatt then 
    for (let i = 0; i < segments.length; i++) {
      if(titleRegex.test(segments[i])){
          formattedText.push(replaceAndFormattitle(segments[0].replace(/[;.,:]/g, ''))) // this regular expresion returns a text clean of ,.:; 
      }
      else if(lowerFontTitleRegex.test(segments[i])){
        formattedText.push(replaceAndFormatFonttitle(segments[i].replace(/[;.,:]/g, '')));
      }
      else if(stepsRegex.test(segments[i])){
        formattedText.push(replaceAndFormatstep(segments[i].replace(/[;.,:]/g, '')));
      }
      else if(dotRegex.test(segments[i])){
        formattedText.push(replaceAndFormatdot(segments[i].replace(/[;.,:]/g, '')));
      }
    };
  return <div>{formattedText}</div>;  
 }
 /* If need to create a new regex method just add first the new regular expression, create the function to make the regex and male the changes if it match witjh any segments[i]*/