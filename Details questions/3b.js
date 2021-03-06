Qualtrics.SurveyEngine.addOnload(function () {
    //-------Buttons
    nextbuttonDefault(sections["Four"]);
    prevbuttonDefault(sections["ThreeA"]);

    //------------------3b carry forward:
    //define the answers as object
    var threeBVals = {
        NPF: [
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/1}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/2}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/3}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/4}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/5}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/6}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/7}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/8}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/9}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/10}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/11}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/12}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/13}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/14}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/15}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/16}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/17}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/18}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/19}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/20}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/21}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/22}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/23}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/24}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/25}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/26}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/27}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/28}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/29}",
            "${q://QID9%235/ChoiceGroup/SelectedAnswers/30}",
        ],
        awardNo: [
            "${q://QID9%231/ChoiceTextEntryValue/1/1}",
            "${q://QID9%231/ChoiceTextEntryValue/2/1}",
            "${q://QID9%231/ChoiceTextEntryValue/3/1}",
            "${q://QID9%231/ChoiceTextEntryValue/4/1}",
            "${q://QID9%231/ChoiceTextEntryValue/5/1}",
            "${q://QID9%231/ChoiceTextEntryValue/6/1}",
            "${q://QID9%231/ChoiceTextEntryValue/7/1}",
            "${q://QID9%231/ChoiceTextEntryValue/8/1}",
            "${q://QID9%231/ChoiceTextEntryValue/9/1}",
            "${q://QID9%231/ChoiceTextEntryValue/10/1}",
            "${q://QID9%231/ChoiceTextEntryValue/11/1}",
            "${q://QID9%231/ChoiceTextEntryValue/12/1}",
            "${q://QID9%231/ChoiceTextEntryValue/13/1}",
            "${q://QID9%231/ChoiceTextEntryValue/14/1}",
            "${q://QID9%231/ChoiceTextEntryValue/15/1}",
            "${q://QID9%231/ChoiceTextEntryValue/16/1}",
            "${q://QID9%231/ChoiceTextEntryValue/17/1}",
            "${q://QID9%231/ChoiceTextEntryValue/18/1}",
            "${q://QID9%231/ChoiceTextEntryValue/19/1}",
            "${q://QID9%231/ChoiceTextEntryValue/20/1}",
            "${q://QID9%231/ChoiceTextEntryValue/21/1}",
            "${q://QID9%231/ChoiceTextEntryValue/22/1}",
            "${q://QID9%231/ChoiceTextEntryValue/23/1}",
            "${q://QID9%231/ChoiceTextEntryValue/24/1}",
            "${q://QID9%231/ChoiceTextEntryValue/25/1}",
            "${q://QID9%231/ChoiceTextEntryValue/26/1}",
            "${q://QID9%231/ChoiceTextEntryValue/27/1}",
            "${q://QID9%231/ChoiceTextEntryValue/28/1}",
            "${q://QID9%231/ChoiceTextEntryValue/29/1}",
            "${q://QID9%231/ChoiceTextEntryValue/30/1}",
        ],
        uniqueID: [
            "${q://QID9%232/ChoiceTextEntryValue/1/1}",
            "${q://QID9%232/ChoiceTextEntryValue/2/1}",
            "${q://QID9%232/ChoiceTextEntryValue/3/1}",
            "${q://QID9%232/ChoiceTextEntryValue/4/1}",
            "${q://QID9%232/ChoiceTextEntryValue/5/1}",
            "${q://QID9%232/ChoiceTextEntryValue/6/1}",
            "${q://QID9%232/ChoiceTextEntryValue/7/1}",
            "${q://QID9%232/ChoiceTextEntryValue/8/1}",
            "${q://QID9%232/ChoiceTextEntryValue/9/1}",
            "${q://QID9%232/ChoiceTextEntryValue/10/1}",
            "${q://QID9%232/ChoiceTextEntryValue/11/1}",
            "${q://QID9%232/ChoiceTextEntryValue/12/1}",
            "${q://QID9%232/ChoiceTextEntryValue/13/1}",
            "${q://QID9%232/ChoiceTextEntryValue/14/1}",
            "${q://QID9%232/ChoiceTextEntryValue/15/1}",
            "${q://QID9%232/ChoiceTextEntryValue/16/1}",
            "${q://QID9%232/ChoiceTextEntryValue/17/1}",
            "${q://QID9%232/ChoiceTextEntryValue/18/1}",
            "${q://QID9%232/ChoiceTextEntryValue/19/1}",
            "${q://QID9%232/ChoiceTextEntryValue/20/1}",
            "${q://QID9%232/ChoiceTextEntryValue/21/1}",
            "${q://QID9%232/ChoiceTextEntryValue/22/1}",
            "${q://QID9%232/ChoiceTextEntryValue/23/1}",
            "${q://QID9%232/ChoiceTextEntryValue/24/1}",
            "${q://QID9%232/ChoiceTextEntryValue/25/1}",
            "${q://QID9%232/ChoiceTextEntryValue/26/1}",
            "${q://QID9%232/ChoiceTextEntryValue/27/1}",
            "${q://QID9%232/ChoiceTextEntryValue/28/1}",
            "${q://QID9%232/ChoiceTextEntryValue/29/1}",
            "${q://QID9%232/ChoiceTextEntryValue/30/1}",
        ],
        inventors: [
            "${q://QID9%233/ChoiceTextEntryValue/1/1}",
            "${q://QID9%233/ChoiceTextEntryValue/2/1}",
            "${q://QID9%233/ChoiceTextEntryValue/3/1}",
            "${q://QID9%233/ChoiceTextEntryValue/4/1}",
            "${q://QID9%233/ChoiceTextEntryValue/5/1}",
            "${q://QID9%233/ChoiceTextEntryValue/6/1}",
            "${q://QID9%233/ChoiceTextEntryValue/7/1}",
            "${q://QID9%233/ChoiceTextEntryValue/8/1}",
            "${q://QID9%233/ChoiceTextEntryValue/9/1}",
            "${q://QID9%233/ChoiceTextEntryValue/10/1}",
            "${q://QID9%233/ChoiceTextEntryValue/11/1}",
            "${q://QID9%233/ChoiceTextEntryValue/12/1}",
            "${q://QID9%233/ChoiceTextEntryValue/13/1}",
            "${q://QID9%233/ChoiceTextEntryValue/14/1}",
            "${q://QID9%233/ChoiceTextEntryValue/15/1}",
            "${q://QID9%233/ChoiceTextEntryValue/16/1}",
            "${q://QID9%233/ChoiceTextEntryValue/17/1}",
            "${q://QID9%233/ChoiceTextEntryValue/18/1}",
            "${q://QID9%233/ChoiceTextEntryValue/19/1}",
            "${q://QID9%233/ChoiceTextEntryValue/20/1}",
            "${q://QID9%233/ChoiceTextEntryValue/21/1}",
            "${q://QID9%233/ChoiceTextEntryValue/22/1}",
            "${q://QID9%233/ChoiceTextEntryValue/23/1}",
            "${q://QID9%233/ChoiceTextEntryValue/24/1}",
            "${q://QID9%233/ChoiceTextEntryValue/25/1}",
            "${q://QID9%233/ChoiceTextEntryValue/26/1}",
            "${q://QID9%233/ChoiceTextEntryValue/27/1}",
            "${q://QID9%233/ChoiceTextEntryValue/28/1}",
            "${q://QID9%233/ChoiceTextEntryValue/29/1}",
            "${q://QID9%233/ChoiceTextEntryValue/30/1}",
        ]
    };

    carry3b(threeBVals);
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //----------set hover text for each input:
    setHoverText("3b", filters);
    //-----------date picker:
    loadDatePicker("filedPatents");
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});