import x from './x.js'
import './assets/1.css'
import './assets/2.scss'
import './assets/3.less'
import './assets/4.styl'
import img from './assets/01.png'

console.log('hello,' + x)

const div = document.createElement('div')
div.innerHTML = `
    sass
    <div>
        <div style="flex: 1; display: flex; justify-content: center; align-items: center">
            <img src="${img}" style="margin: 50px 0; max-width: 70%">
        </div>
        <button>Lazy Load</button>
    </div>
`
document.body.append(div)
div.querySelector("button").onclick = lazy

function lazy() {
    import('./lazy').then((res) => {
        res.default()
    }).catch((err) => {
        console.error('模块导入失败：' + err)
    })
}