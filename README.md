# XD Plugin Helper Library

Adobe XD is a great tool to create interactive prototypes for user experiences. Because they have just started to develop their plugin platform we often have to use some workarounds. This library is the place to collect all the little helpers to develop awesome Adobe XD Plugins.

The library will be extended and you can always push merge requests to add your own helpers.

## Available Helpers

### Error Rectangle

![Adobe XD Error Rectangle Example](assets/error-rectangle.png "Adobe XD Error Rectangle Example")
This helper will create error rectangles as shown above.

#### Create a group of erros
```javascript
import { XDNodeErrorGroup } from "xd-plugin-helper";

const errors = [
    node: //add an actual node from XD,
    msg: //error text you want to display
]
const xdSelectionNode = //selection object you receive from XD

const errorGroup = new XDNodeErrorGroup(errorNodeList, xdSelectionNode);
errorGroup.addErrors();
```

#### Create a single error rectangle
```javascript
import { XDNodeErrorRectangle } from "xd-plugin-helper";

const xdNode = // actual XD Node
const error = new XDNodeErrorRectangle(xdNode);
error.create("Your error message");
```

# Contributors
The initial project was created at the Tel Aviv Design Tools Hackathon in 2018.
Members of the group were:

* @svschannak
* @pallavimonicaekka

# MIT License

Copyright (c) 2018 Sven Schannak

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