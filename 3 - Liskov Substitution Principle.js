// Liskov Substitution Principle
// Принцип замещения Барбары Лисков

class Component {
    constructor(name, title = ''){
        this.name = name
        this.title = title
        this.typeHOC = false
    }
}

class ComponentWithTemplate extends Component{
    render(){
        return `
        <div>
            <h1>Component ${this.name} - ${this.title}</h1>    
        </div>`
    }
}

class HigherOrderComponent extends Component { //not render
    constructor(){
        super()
        this.typeHOC = true
    }
}

class HeaderComponent extends ComponentWithTemplate {
    constructor(title){
        super('header', title)
    }
}

class LinkComponent extends ComponentWithTemplate{
    constructor(title){
        super('link', title)
    }
}

class HOCRedux extends HigherOrderComponent{ //not render
    constructor(){
        super('redux')
    }
}


function getTemplate(component){
    return component.render()
}

console.log(getTemplate(new HeaderComponent('Header Liskov Substitution Principle')))
console.log(getTemplate(new LinkComponent('Link Liskov substitution principle')))


// Example with person
class Person {
    age
    name
    email
}

class Member extends Person{
    access(){
        console.log('У тебя есть доступ')
    }
}

class Guest extends Person {
    isGuest = true
}

class Backend extends Member {
    canCreateBackend() {

    }
}

class Frontend extends Member {
    canCreateFrontend() {

    }
}

class PersonDifferentCompany extends Guest {
    access(){
        throw new Error('У тебя нет доступа')
    }
}

function openSecretDoor(member) {
    member.access()
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())
// openSecretDoor(new PersonDifferentCompany())