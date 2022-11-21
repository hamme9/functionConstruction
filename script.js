'use strict';

const DomElement = function(name, heightValue, widthValue, bgValue, fontSizeValue) {
    this.selector = name;
    this.height = heightValue;
    this.width = widthValue;
    this.bg = bgValue;
    this.fontSize = fontSizeValue;

    this.addElem = function() {
        let elem;

        if(this.selector[0] === '.') {
            elem = document.createElement('div');
            elem.classList.add(this.selector.slice(1));

            elem.innerHTML = "<strong>DIV</strong> элемент с классом: " + "<strong>" + 
            elem.className + "</strong>";
        }
        if(this.selector[0] === '#') {
            elem = document.createElement('p');
            elem.id = this.selector.slice(1);

            elem.innerHTML = "<strong>Параграф</strong> с классом: " + "<strong>" + 
            elem.id + "</strong>";
        }

        elem.style.cssText = 'height: ' + this.height + ';' + 'width: ' + this.width + ';' + 'background:' + this.bg;
        elem.style.fontSize = this.fontSize;
        document.body.append(elem); 
    };

};

const addDiv = new DomElement('#div-new', '100px', '400px', 'cyan', '24px');
const addParagraph = new DomElement('#p-new', '100px', '400px', 'aquamarine', '24px');

addDiv.addElem();
addParagraph.addElem();