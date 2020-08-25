export default function () {
    const div = document.createElement('div')
    div.innerText = '这是一条懒加载的弹幕~꒰⑅•ᴗ•⑅꒱'
    Object.assign(div.style, {
        'fontSize': '4vw',
        'color': 'white',
        'position': 'absolute',
        'top': Math.floor(Math.random() * 60 + 10).toString() + '%',
        'left': '100%',
        'animation': 'danmu 5s linear',
        'white-space': 'nowrap',
        'text-shadow': '0 0 10px #404146'
    })
    div.onanimationend = () => {
        div.remove()
    }
    document.body.append(div)
}