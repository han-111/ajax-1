let n = 1
getPage.onclick = () => {

    const request = new XMLHttpRequest()
    request.open('GET', `/page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                const array = JSON.parse(request.response)
                array.forEach(element => {
                    const div = document.createElement('li')
                    const str = element.id + '' + element.name + '' + element.damage
                    div.innerHTML = str
                    xxx.appendChild(div)
                });
                n = n + 1;
            } else {
                return
            }

        } else {
            return
        }
    }
    request.send()
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                const dom = JSON.parse(request.response)
                dom.forEach(element => {
                    const div = document.createElement('div')
                    div.innerHTML = element.id + '' + element.name + '' + element.damage
                    document.body.appendChild(div)
                });
            }

        }
    }
    request.send()
}
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                const dom = request.responseXML
                const text = dom.getElementsByTagName('heading')[0].textContent
                const div = document.createElement('div')
                div.innerHTML = text.trim()
                document.body.appendChild(div)
            }

        }
    }
    request.send()
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onload = () => {
        const html = document.createElement('html')
        html.innerHTML = request.response
        document.body.appendChild(html)
    }
    request.enerror = () => { }
    request.send()
}
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/main2.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                const srcipt = document.createElement('script')
                srcipt.innerHTML = request.response
                document.body.appendChild(srcipt)
            } else {
                console.log(request.status)
            }

        }
    }
    request.enerror = () => { }
    request.send()
}
getCss.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onload = () => {
        console.log(request.response)
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
    }
    request.enerror = () => {
        console.log('失败')
    }
    request.send()
}