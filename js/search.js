const searchableValues = [
    {
        query: 'Class 12 Maths Permutation Combination',
        link: '/pages/notes/#permutationCombination',
        description: 'Class 12 Maths Permutation Combination'
    },
    {
        query: 'Class 12 Maths Binomial Theorem',
        link: '/pages/notes/#binomialTheorem',
        description: 'Class 12 Maths Binomial Theorem'
    },
    {
        query: 'Class 12 Maths Complex Number',
        link: '/pages/notes/#complexNumber',
        description: 'Class 12 Maths Complex Number'
    },
    {
        query: 'Class 12 Maths Sequence & Series',
        link: '/pages/notes/#sequenceSeries',
        description: 'Class 12 Maths Sequence & Series'
    },
    {
        query: 'Class 12 Maths Matrix',
        link: '/pages/notes/#matrixLinearEquations',
        description: 'Class 12 Maths matrix'
    },
    {
        query: 'Class 12 Maths Properties of Triangle',
        link: '/pages/notes/#propertiesTriangle',
        description: 'Class 12 Maths Properties of Triangle'
    },
    {
        query: 'Class 12 Maths Solution of Triangle',
        link: '/pages/notes/#solutionTriangle',
        description: 'Class 12 Maths Solution of Triangle'
    }
]

if(location.pathname==='/'){
    search('searchInputBoxHomeMain', 'searchResultBoxHomeMain')
}
search('searchInputBoxTop', 'searchResultBoxTop')
search('searchInputBoxSide', 'searchResultBoxSide')


// top search bar


// function 1
function search(inputBoxType, resultBoxType){
    document.getElementById(`${inputBoxType}`).onkeyup = function (e) {
        e.preventDefault()
        searchOne(inputBoxType, resultBoxType)
    }
    document.getElementById(`${inputBoxType}`).onblur = function (e) {
        e.preventDefault()
        setTimeout( ()=>{
            document.getElementById(`${inputBoxType}`).value = ''
        searchOne(inputBoxType, resultBoxType)
        },750)
        
    }
}

// function 2
function searchOne(inputBoxType, resultBoxType) {
    let input = document.getElementById(`${inputBoxType}`).value
    let result = []
    let output;

    if(input.length){
        result = searchableValues.filter( (group) => {
            return group.query.toLocaleLowerCase().includes(input.toLocaleLowerCase())
        })  
    }

    display(result, resultBoxType)
}

// function 3
function display(result, resultBoxType ) {


    const mainDivData = result.map( (element) => {
        return "<a>"+ (("<h3>" + element.query + "</h3>") + ("<p>" + element.description + "</p>")) +"</a>"
    } )

    let mainDiv = ''

    for (let i = 0; i < mainDivData.length; i++) {
        mainDiv = mainDivData[i] + mainDiv
    }

    document.getElementById(`${resultBoxType}`).innerHTML = '<div>' + mainDiv + '<div>'
    

    let anchors = document.querySelectorAll(`#${resultBoxType} div a`)
    let title = document.querySelectorAll(`#${resultBoxType} div h3`)
    let description = document.querySelectorAll(`#${resultBoxType} div p`)
    for(let i=0; i < result.length ; i++ ){
        anchors[i].classList.add('border-b-2', 'border-shadow_colour', 'hover:bg')
        anchors[i].href = result[i].link
        title[i].classList.add('font-sans', 'text-md')
        title[i].textContent = result[i].query
        description[i].classList.add('font-light', 'pb-3', 'text-sm')
        description[i].textContent = result[i].description
    }

}