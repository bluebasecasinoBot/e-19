import { __c, __m, __SYD, __v, manage_mediaQuery, SYD_VAR } from "./sydneyDom_v3.js"
import bookify from "./book_lib/bookify.js"

import "./nav.js"
import "./page1.js"
import "./page2.js"
import "./page3.js"
import "./page4.js"
import "./pageMemes.js"
import "./page5.js"
import "./page6.js"
import "./page7.js"
import "./footer.js"
import "./variable.js"

__SYD.container = () =>{
    return __c(
        "div",
        {
            style:`min-height:100vh;width:100vw;background:${SYD_VAR.mainClr.get()};font-family:font2;`
        },
        [
            // __SYD.navBar(),
            __SYD.p1(),
            __SYD.p2(),
            __SYD.p3(),
            __SYD.p4(),
            // __SYD.pageMemes(),
            // __SYD.p5(),
            // __SYD.p6(),
            // __SYD.p7(),
            __SYD.footer_main_parent()
        ],
        {
            createState:{
                stateName:"container"
            }
        }
    )
}

__m(__SYD.container() , ()=>{
    manage_mediaQuery(window.innerWidth);

    // const el = ["p1" , "p2" , "p3" , "p4" , "footer_main_parent"]

    function scaleToFit() {
        const baseWidth = 1366;
        const baseHeight = 679;
        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;

        const scale = Math.min(winWidth / baseWidth, winHeight / baseHeight);

        Array.from(__v["container"].children).forEach(elem =>{
            console.log(scale < .5 ? .5 : scale)
            elem.style.transform = `scale(${scale > 1 ? 1 : scale})`;
        })
    }

    window.addEventListener('resize', scaleToFit);
    window.addEventListener('load', scaleToFit);
});