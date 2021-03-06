//-----------data references
var qFilters = {
    ThreeA: "${q://QID8/ChoiceTextEntryValue}",
    ThreeB: "${q://QID9%235/ChoiceGroup/SelectedChoicesForAnswer/2}",
    FourD: "${q://QID11/ChoiceTextEntryValue}",
    FiveD: "${q://QID13/ChoiceTextEntryValue}",
    SixAD: "${q://QID15/ChoiceTextEntryValue}",
    SixBD: "${q://QID16%238/ChoiceGroup/SelectedChoicesForAnswer/1}",
    SevenD: "${q://QID48/ChoiceTextEntryValue}}",
    EightD: "${q://QID50/ChoiceTextEntryValue}",
    NineD: "${q://QID52/ChoiceTextEntryValue}",
    TenD: "${q://QID57/ChoiceTextEntryValue}",
    TenD2: "${e://Field/tRevDisplay}",
    ElevenD: "${q://QID60/ChoiceTextEntryValue}",
    Supporting: "${q://QID70/ChoiceGroup/SelectedChoices}"
};

var filters = [
    { filterRef: "3a", filterName: "disclosures", filterValue: "${q://QID8/ChoiceTextEntryValue}" },
    { filterRef: "3b", filterName: "patentApps", filterValue: "${q://QID9%235/ChoiceGroup/SelectedChoicesForAnswer/2}" },
    { filterRef: "4", filterName: "grantedPatents", filterValue: "${q://QID11/ChoiceTextEntryValue}" },
    { filterRef: "5", filterName: "otherIP", filterValue: "${q://QID13/ChoiceTextEntryValue}" },
    { filterRef: "6", filterName: "newTransactions", filterValue: "${q://QID15/ChoiceTextEntryValue}" },
    { filterRef: "7", filterName: "liveAgreements", filterValue: "${q://QID48/ChoiceTextEntryValue}" },
    { filterRef: "8", filterName: "terminatedAgreements", filterValue: "${q://QID50/ChoiceTextEntryValue}" },
    { filterRef: "9", filterName: "caseStudies", filterValue: "${q://QID52/ChoiceTextEntryValue}" },
    { filterRef: "10", filterName: "revenue", filterValue: "${q://QID57/ChoiceTextEntryValue}" },
    { filterRef: "11", filterName: "equity", filterValue: "${q://QID60/ChoiceTextEntryValue}" }
];

Qualtrics.SurveyEngine.addOnload(function () {
    /*var plug = document.getElementById("Plug"); //Get the Defined element
    var plugBox = document.getElementById("PushStickyFooter"); //Get the Defined element
    plug.style.cssText += ';display:none !important;'; //Set the defined element's display style to "none"
    plugBox.style.cssText += ';display:none !important;'; //hide the container too
    */
    //------Browser check
    if (jQuery("#Guidance_NOTES").length > 0) {
        broswerAlert();
    };

    //-------Button labels
    navlabels()

    

    //--hide tooltip if present
    jQuery('.tooltip').css("display", "none");

    //------------page loading
    loadPage();//show questions

    loadScrollPosition(0);//load page at scroll top
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //---------Menu
    menuScroll(); //shadow when scrolling 

    loadMenu('${e://Field/progressBar}'); //menu button

    //---------Hotkey Navigate ---- ADD ON READY

    hotkeyNavigate(this);

    //-------sideways scroller for matrices (ADD ON READY):
    sideScrollButtons(jQuery(".SBS .QuestionBody"), ".ChoiceStructure tbody");

    //--------menu helper flash:
    borderFlash2(jQuery(".menuHelper"), getColour("error"), jQuery("#Logo img"))

    //copy button
    copyButton("#CopyContact", "#contactInfo")

    //----Response Summary Buttons:
    if (jQuery("#EndOfSurvey").length > 0) {
        prevbuttonDefault('Edit report');
        nextbuttonDefault("Submit report")
    };
});