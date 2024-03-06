(function () {
    const targetID = "contents_wrapper"
    const contentDirName = "contents"
    let path = location.pathname.substring(1).split("/");// "[ccl_intro,bunren1.html]"
    let targetElem = document.getElementById(targetID)
    let insertElem

    let fetchPath = contentDirName + "/" + path[path.length - 1] //"contents/bunren1.html"
    console.log(fetchPath)
    try {
        fetch(fetchPath)
            .then(data => data.text())
            .then(html => insertElem = html)
            .then(() => {
                console.log("load complete")
                let parser = new DOMParser()
                insertElem = parser.parseFromString(insertElem, 'text/html').body.children
                console.log(insertElem)
                for (let i = insertElem.length-1; i >= 0; i--) {
                    targetElem.appendChild(insertElem[i])
                }
            })
    } catch (e) {
        insertElem = document.createElement("h1")
        insertElem.innerText = "Failed to get contents. Please Reload"
        targetElem.appendChild(insertElem)
    }
}())