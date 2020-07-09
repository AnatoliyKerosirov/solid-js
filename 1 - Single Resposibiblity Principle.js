//Single Responsibility Principle
//Принцип единой ответственности

class News {
    constructor( title, text ){
        this.title = title
        this.text = text
        this.modified = false
    }

    update ( text ){
        this.text = text
        this.modified = true
    }
}

class PrinterNews{
    constructor( news ){
        this.news = news
    }

    html(){
        return `
            <div>
                <h1>${this.news.title}</h1>
                <p>${this.news.text}</p>
            </div>
        `
    }

    json(){
        return JSON.stringify( this.news, null, 2)
    }
}

const news = new News('На Марс', 'Создание нового двигателя для полета на Марс')

const printer = new PrinterNews(news)

console.log(printer.html())
console.log(printer.json())