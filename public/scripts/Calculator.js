var Calculator = (function () {

    function buildBase() {
        var controlDiv = document.createElement("div");
        controlDiv.setAttribute("class", "mainControlDiv");
        controlDiv.id = "MainControlDiv";

        var fullTotalWrapper = document.createElement("span");
        fullTotalWrapper.setAttribute("class", "fullTotalWrapper");
        fullTotalWrapper.id = "fullTotalWrapper";
        fullTotalWrapper.innerHTML = "Total: ";

        var fullTotalDisplay = document.createElement("input");
        fullTotalDisplay.setAttribute("class", "FullTotalDisplay");
        fullTotalDisplay.id = "FullTotalDisplay";
        fullTotalDisplay.setAttribute("type", "number");
        fullTotalDisplay.setAttribute("readonly", "readonly");

        fullTotalWrapper.appendChild(fullTotalDisplay);
        controlDiv.appendChild(fullTotalWrapper);

        var silverCheckWrapper = document.createElement("span");
        silverCheckWrapper.setAttribute("class", "SilverCheckWrapper");
        silverCheckWrapper.id = "SilverCheckWrapper";
        silverCheckWrapper.innerHTML = "Silver: ";

        var silverCheckBox = document.createElement("input");
        silverCheckBox.setAttribute("type", "checkbox");
        silverCheckBox.setAttribute("class", "SilverCheckbox");
        silverCheckBox.id = "SilverCheckbox";
        silverCheckBox.name = "SilverCheckbox";
        silverCheckBox.setAttribute("onchange", "Calculator.silverChecked()");

        silverCheckWrapper.appendChild(silverCheckBox);
        controlDiv.appendChild(silverCheckWrapper);

        var addCardButton = document.createElement("button");
        addCardButton.setAttribute("class", "AddCardButton");
        addCardButton.id = "AddCardButton";
        addCardButton.innerHTML = "Add Card";
        addCardButton.setAttribute("onclick", "Calculator.addCardClicked()");
        controlDiv.appendChild(addCardButton);

        var calculateButton = document.createElement("button");
        calculateButton.setAttribute("Class", "CalculateButton");
        calculateButton.id = "CalculateButton";
        calculateButton.innerHTML = "Calculate EXP";
        calculateButton.setAttribute("onclick", "Calculator.calculateClicked()");
        controlDiv.appendChild(calculateButton);

        var exportButton = document.createElement("button");
        exportButton.setAttribute("class", "ExportButton");
        exportButton.id = "ExportButton";
        exportButton.innerHTML = "Export";
        exportButton.setAttribute("onclick", "Calculator.exportClicked()");
        controlDiv.appendChild(exportButton);

        Calculator.CalcDiv.appendChild(controlDiv);

        Calculator.cardsDiv = document.createElement("div");
        Calculator.cardsDiv.setAttribute("class", "CardsDiv");
        Calculator.cardsDiv.id = "CardsDiv";
        Calculator.CalcDiv.appendChild(Calculator.cardsDiv);
    }

    function addOptionRow(index, target) {
        var optionRow = document.createElement("div");
        optionRow.setAttribute("class", "OptionRow");
        optionRow.id = "OptionRow" + index;

        var optionSelect = document.createElement("select");
        optionSelect.setAttribute("class", "OptionSelect");
        optionSelect.id = "OptionSelect" + index;
        optionSelect.name = "Option" + index;
        optionSelect.setAttribute("onchange", "Calculator.optionChanged(this)");

        addSelectOptions(optionSelect);
        optionRow.appendChild(optionSelect);

        var multiplySpan = document.createElement("span");
        multiplySpan.setAttribute("class", "multiplySpan");
        multiplySpan.innerHTML = "x";
        optionRow.appendChild(multiplySpan);

        var amountSelect = document.createElement("input");
        amountSelect.setAttribute("type", "number");
        amountSelect.setAttribute("min", 0);
        amountSelect.setAttribute("class", "AmountSelect");
        amountSelect.id = "AmountSelect" + index;
        amountSelect.name = "AmountSelect" + index;
        amountSelect.value = 0;
        amountSelect.setAttribute("onchange", "Calculator.amountChanged(this)");
        optionRow.appendChild(amountSelect);

        var rowTotalSpan = document.createElement("span");
        rowTotalSpan.setAttribute("class", "RowTotalSpan");
        rowTotalSpan.id = "RowTotalSpan" + index;
        rowTotalSpan.innerHTML = "=";
        optionRow.appendChild(rowTotalSpan);

        var rowTotalDisplay = document.createElement("input");
        rowTotalDisplay.setAttribute("class", "RowTotalDisplay");
        rowTotalDisplay.id = "RowTotalDisplay" + index;
        rowTotalDisplay.setAttribute("type", "number");
        rowTotalDisplay.setAttribute("readonly", "readonly");
        rowTotalSpan.appendChild(rowTotalDisplay);

        var deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "RowDeleteButton");
        deleteButton.id = "RowDeleteButton" + index;
        deleteButton.setAttribute("onclick", "Calculator.deleteRowClicked(this)");
        deleteButton.innerHTML = "Delete";
        optionRow.appendChild(deleteButton);

        target.appendChild(optionRow);
    }

    function addCharCard(index, target) {
        var card = document.createElement("div");
        card.setAttribute("class", "CharCard");
        card.id = "Card" + index;

        var rowControlWrapper = document.createElement("div");
        rowControlWrapper.setAttribute("class", "RowControlWrapper");
        rowControlWrapper.id = "RowControlWrapper" + index;
        card.appendChild(rowControlWrapper);

        var addRowButton = document.createElement("button");
        addRowButton.setAttribute("class", "AddRowButton");
        addRowButton.id = "AddRowButton" + index;
        addRowButton.setAttribute("onclick", "Calculator.addRowClicked(this)");
        addRowButton.innerHTML = "Add Row";
        rowControlWrapper.appendChild(addRowButton);

        var rowWrapper = document.createElement("div");
        rowWrapper.setAttribute("class", "RowWrapper");
        rowWrapper.id = "RowWrapper" + index;
        card.appendChild(rowWrapper);

        var controlWrapper = document.createElement("div");
        controlWrapper.setAttribute("class", "ControlWrapper");
        controlWrapper.id = "ControlWrapper" + index;
        card.appendChild(controlWrapper);

        var totalSpan = document.createElement("span");
        totalSpan.setAttribute("class", "TotalSpan");
        totalSpan.id = "TotalSpan" + index;
        totalSpan.innerHTML = "Total: ";
        controlWrapper.appendChild(totalSpan);

        var totalDisplay = document.createElement("input");
        totalDisplay.setAttribute("class", "TotalDisplay");
        totalDisplay.id = "TotalDisplay" + index;
        totalDisplay.setAttribute("type", "number");
        totalDisplay.setAttribute("readonly", "readonly");
        totalSpan.appendChild(totalDisplay);

//        var cardName = document.createElement("input");
//        cardName.setAttribute("type", "text");
//        cardName.setAttribute("class", "CardName");
//        cardName.name = "CardName" + index;
//        cardName.id = "CardName" + index;
//        cardName.setAttribute("onchange", "Calculator.nameChanged(this)");
//        cardName.setAttribute("placeholder", "Name");
//        controlWrapper.appendChild(cardName);

//        var cardLink = document.createElement("input");
//        cardLink.setAttribute("type", "text");
//        cardLink.setAttribute("class", "CardLink");
//        cardLink.name = "CardLink" + index;
//        cardLink.id = "CardLink" + index;
//        cardLink.setAttribute("onchange", "Calculator.linkChanged(this)");
//        cardLink.setAttribute("placeholder", "Ref Link");
//        controlWrapper.appendChild(cardLink);

        var deleteCardButton = document.createElement("button");
        deleteCardButton.setAttribute("class", "CardDeleteButton");
        deleteCardButton.id = "CardDeleteButton" + index;
        deleteCardButton.setAttribute("onclick", "Calculator.deleteCardClicked(this)");
        deleteCardButton.innerHTML = "Delete";
        controlWrapper.appendChild(deleteCardButton);

        target.appendChild(card);
    }

    function addSelectOptions(targetSelect) {
        for (var i = 0; i < Calculator.options.length; i++) {
            var selectOption = document.createElement("option");
            selectOption.text = Calculator.options[i].title;
            selectOption.value = Calculator.options[i].expValue;
            if (i == 0) {
                selectOption.selected = "selected";
            }
            targetSelect.appendChild(selectOption);
        }
    }

    function addTotalBit(id, target) {
        var totalBit = document.createElement('span');
        totalBit.setAttribute("class", "totalValue");
        totalBit.id = id;
        target.appendChild(totalBit);
    }

    function inputChanged(target) {

    }

    function amountChanged(target) {
        var idPair = parseRowID(target.id.replace("AmountSelect", ""));
        Calculator.cards[idPair.card].rows[idPair.row].amount = target.value;
    }

    function optionChanged(target) {
        var idPair = parseRowID(target.id.replace("OptionSelect", ""));
        Calculator.cards[idPair.card].rows[idPair.row].selectedOption = target.selectedIndex;
    }

//    function nameChanged(target) {
//        var targetNum = target.id.replace("CardName", "");
//        Calculator.cards[targetNum].name = target.value;
//    }

//    function linkChanged(target) {
//        var targetNum = target.id.replace("CardLink", "");
//        Calculator.cards[targetNum].link = target.value;
//    }

    function silverChecked() {
        if (document.getElementById("SilverCheckbox").checked == true) {
            Calculator.isSilver = true;
        } else {
            Calculator.isSilver = false;
        }
    }

    function calculateTotal() {
        var fullTotal = 0;

        for (var i = 0; i < Calculator.cards.length; i++) {
            var targetCard = Calculator.cards[i];
            if (targetCard.active) {
                var workingTotal = 0;
                for (var j = 0; j < targetCard.rows.length; j++) {
                    var targetRow = targetCard.rows[j];
                    if (targetRow.active) {
                        var rowValue = getOptionTotal(targetRow.selectedOption, targetRow.amount);

                        targetRow.total = rowValue;
                        //                        rowTotalDisplay.id = "RowTotalDisplay" + index;
                        document.getElementById("RowTotalDisplay" + i + "_" + j).value = targetRow.total;

                        workingTotal += rowValue;
                    }
                }
                targetCard.totalValue = workingTotal;
                document.getElementById("TotalDisplay" + i).value = workingTotal;

                fullTotal += workingTotal;
            }
        }

        Calculator.fullTotal = fullTotal;
        document.getElementById("FullTotalDisplay").value = fullTotal;
    }

    function getOptionTotal(optionIndex, amount) {
        return Calculator.options[optionIndex].expValue * amount;
    }

    function exportExp() {
        calculateTotal();
        var unitWord = Calculator.isSilver ? "silver" : "exp";
        var result = "Hello! Here is your " + unitWord + " earned:<br/>";

        for (var i = 0; i < Calculator.cards.length; i++) {
            var targetCard = Calculator.cards[i];
            if (targetCard.active && targetCard.rows.length > 0) {
                var cardString = "";
                
//                var nameString = "Character " + (i + 1);
//                if (targetCard.name != "") {
//                    nameString = targetCard.name;
//                }
//                if (targetCard.link != "") {
//                    cardString += '<a href="' + targetCard.link + '" target="_blank">' + nameString + ':</a> ';
//                } else {
//                    cardString += nameString + ": ";
//                }
                
                for (var j = 0; j < targetCard.rows.length; j++) {
                    var targetRow = targetCard.rows[j];
                    if (targetRow.active) {
                        var rowString = "(" + Calculator.options[targetRow.selectedOption].title + " x " + targetRow.amount + ")";
                        if ((j + 1) < targetCard.rows.length) {
                            rowString += " + ";
                        }
                        cardString += rowString;
                    }
                }
                cardString += " = " + targetCard.totalValue + "<br/>";
                result += cardString;
            }
        }

        //        result += "<b>Total Exp:" + Calculator.fullTotal + "</b><br/>";

//        if (Calculator.isSilver) {
//            result += "<b>Total Silver:" + Calculator.fullTotal + "</b><br/>";
//        } else {
//            result += "<b>Total Exp:" + Calculator.fullTotal + "</b><br/>";
//        }
        result += "((Add any cameos here!))";
        document.getElementById("exportText").value = result;
        openExport();
    }

    function openExport() {
        document.getElementById("exportOverlay").setAttribute("class", "supremeOverlay");
    }

    function closeExport() {
        document.getElementById("exportText").value = "";
        document.getElementById("exportOverlay").setAttribute("class", "deadOverlay");
    }

    function parseRowID(id) {
        var result = {
            card: 0,
            row: 0
        };

        var idRegex = /(\d+)_(\d+)/;
        var matches = idRegex.exec(id);

        result.card = matches[1];
        result.row = matches[2];

        return result;
    }

    function deleteRowClicked(target) {
        var targetNum = target.id.replace("RowDeleteButton", "");
        console.log(targetNum);
        var targetRow = target.parentElement;
        var cardID = targetRow.parentElement.id.replace("RowWrapper", "");

        //        cards[cardID].rows
        var idPair = parseRowID(targetNum);
        Calculator.cards[idPair.card].rows[idPair.row] = {
            selectedOption: 0,
            amount: 0,
            active: false,
            total: 0
        }

        targetRow.parentElement.removeChild(targetRow);
    }

    function deleteCardClicked(target) {
        var targetNum = target.id.replace("CardDeleteButton", "");
        var targetCard = document.getElementById("Card" + targetNum);
        targetCard.parentElement.removeChild(targetCard);
        Calculator.cards[targetNum] = {
            name: "",
            link: "",
            active: false,
            rows: []
        };
    }

    function addRowClicked(target) {
        var targetNum = target.id.replace("AddRowButton", "");
        var targetCard = Calculator.cards[targetNum];
        var targetCardDiv = document.getElementById("RowWrapper" + targetNum);

        targetCard.rows.push({
            selectedOption: 0,
            amount: 0,
            active: true,
            total: 0
        });

        addOptionRow(targetNum + "_" + (targetCard.rows.length - 1), targetCardDiv);
    }

    function addCardClicked() {
        addCharCard(Calculator.cardIndex, Calculator.cardsDiv);
        Calculator.cards.push({
            name: "",
            link: "",
            totalValue: 0,
            active: true,
            rows: []
        });
        Calculator.cardIndex++;
    }

    function setup() {
        Calculator.CalcDiv = document.getElementById("Calculator");
        document.getElementById("doneButton").setAttribute("onclick", "Calculator.exportDoneClicked()");
        buildBase();
    }

    return {
        cards: [],
        cardIndex: 0,
        CalcDiv: {},
        cardsDiv: {},
        fullTotal: 0,
        isSilver: false,
        options: [
            {
                title: "Sketch Headshot",
                expValue: 5
        },
            {
                title: "Sketch Waist Up",
                expValue: 10
        },
            {
                title: "Sketch Fullbody",
                expValue: 15
        },
            {
                title: "Full Art headshot",
                expValue: 15
        },
            {
                title: "Full Art Waist Up",
                expValue: 20
        },
            {
                title: "Full Art Fullbody",
                expValue: 30
        },
            {
                title: "Pixel Icon",
                expValue: 15
        },
            {
                title: "Pixel Headshot",
                expValue: 10
        },
            {
                title: "Pixel Fullbody",
                expValue: 20
        },
            {
                title: "Pixel Animated Bonus",
                expValue: 10
        },
            {
                title: "Animation Frames",
                expValue: 5
        },
            {
                title: "Animation - Simple",
                expValue: 20
        },
            {
                title: "Animation - Complex",
                expValue: 35
        },
            {
                title: "Sculpture - Headshot",
                expValue: 100
        },
            {
                title: "Sculpture - Waist-up",
                expValue: 150
        },
            {
                title: "Sculpture - Fullbody",
                expValue: 200
        },
            {
                title: "Flat Colors / Grayscale",
                expValue: 10
        },
            {
                title: "Simple Shading",
                expValue: 10
        },
            {
                title: "Complex Shading",
                expValue: 20
        },
            {
                title: "Basic Background",
                expValue: 10
        },
            {
                title: "Standard Background",
                expValue: 20
        },
            {
                title: "Complex Background",
                expValue: 30
        },
            {
                title: "Expert Background",
                expValue: 60
        },
            {
                title: "Meme Bonus",
                expValue: 10
        },
            {
                title: "Written (per 100 words)",
                expValue: 10
        },
            {
                title: "RP Log (per 100 words)",
                expValue: 10
        }, {
                title: "Bonus",
                expValue: 1
        }, {
                title: "Cameo",
                expValue: 25
        }
    ],

        optionChanged: function (target) {
            optionChanged(target);
        },
        amountChanged: function (target) {
            amountChanged(target);
        },
        silverChecked: function () {
            silverChecked();
        },
//        nameChanged: function (target) {
//            nameChanged(target);
//        },
//        linkChanged: function (target) {
//            linkChanged(target);
//        },
        deleteCardClicked: function (target) {
            deleteCardClicked(target);
        },
        deleteRowClicked: function (target) {
            deleteRowClicked(target);
        },
        addCardClicked: function () {
            addCardClicked();
        },
        calculateClicked: function () {
            calculateTotal();
        },
        exportClicked: function () {
            exportExp();
        },
        exportDoneClicked: function () {
            closeExport();
        },
        addRowClicked: function (target) {
            addRowClicked(target);
        },
        run: function () {
            setup();
        }
    };
}());

function loadFunction() {
    Calculator.run();
}

window.addEventListener("load", loadFunction);

//var card = {
//    name: "Bryce",
//    link: "favlink",
//    totalValue: 0,
//    active: true,
//    rows: [
//        {
//            selectedOption: "optionID",
//            amount: "amount of times option is entered",
//            active: true,
//            total: "JS-calculated total value"
//        }
//    ]
//}