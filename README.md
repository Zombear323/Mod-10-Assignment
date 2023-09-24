# Mod-10-SVG-Logo-Maker

## Table of Contents

[Description](#Description)<br>
[Installation](#Installation-Instructions)<br>
[Usage Information](#Usage-Information)<br>
[Test Instructions](#Test-Instructions)<br>
[Contribution](#Contribution)<br>
[License](#License)<br>
[Questions](#Questions)<br>
[Acceptance Criteria](#Acceptance-Criteria)<br>
[User Story](#User-Story)<br>

## Description

<p>A Node.js command-line app that can create a logo and save it as a SVG file. Prompts user for colour, shape, text.</p> 

## Installation

<p>Clone repository, then run 'npm i inquirer@8.2.4' in terminal before using 'node index.js'</p> 

## Usage Information

<p>used to create various logos</p> 

## Test Instructions

<p>n/a</p> 

## Contribution

<p>n/a</p> 

## License

<p>MIT</p>

```md
MIT License

Copyright (c) 2023 Zombear323

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```

## Questions

[<p>Github Account</p>](https://github.com/Zombear323)
<p>peter.bhagoutie@gmail.com</p>


## User Story

<p>AS a freelance web developer</p>
<p>I WANT to generate a simple logo for my projects</p>
<p>SO THAT I don't have to pay a graphic designer</p>

## Acceptance Criteria

<p>GIVEN a command-line application that accepts user input</p>
<p>WHEN I am prompted for text</p>
<p>THEN I can enter up to three characters</p>
<p>WHEN I am prompted for the text color</p>
<p>THEN I can enter a color keyword (OR a hexadecimal number)</p>
<p>WHEN I am prompted for a shape</p>
<p>THEN I am presented with a list of shapes to choose from: circle, triangle, and square</p>
<p>WHEN I am prompted for the shape's color</p>
<p>THEN I can enter a color keyword (OR a hexadecimal number)</p>
<p>WHEN I have entered input for all the prompts</p>
<p>THEN an SVG file is created named `logo.svg`</p>
<p>AND the output text "Generated logo.svg" is printed in the command line</p>
<p>WHEN I open the `logo.svg` file in a browser</p>
<p>THEN I am shown a 300x200 pixel image that matches the criteria I entered</p>