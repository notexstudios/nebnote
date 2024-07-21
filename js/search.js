const searchableValues = [
    {
        query: 'Class 11 Maths Sets',
        link: '/pages/class11/mathematics/sets/',
        description: 'Sets whole exercise Grade 11'
    },
    {
        query: 'Class 11 Maths Integers',
        link: '/pages/class11/mathematics/realnumbers/',
        description: 'Real Numbers whole exercise Grade 11'
    },
    {
        query: 'Class 11 Maths Function',
        link: '/pages/class11/mathematics/functions/',
        description: 'Function whole exercise Grade 11'
    }
]

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
        document.getElementById(`${inputBoxType}`).value = ''
        searchOne(inputBoxType, resultBoxType)
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

    const mainDiv = result.map( (element) => {
        return "<a>"+ "<h3>" + element.query + "</h3>" + "<p>" + element.description + "</p>" +"</a>"
    } )

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