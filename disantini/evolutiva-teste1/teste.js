        function alternateButtonsArrow() {

            let verifyExists = false;

            let myInterval = setInterval(() => {
                const button1 = element
                if (!verifyExists) {
                    if (button1) {
                        button1.innerHTML = `<img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/11318d651c5bc7dcd3f4100ce90aa7145f008633/disantini/images/arrow-right.svg">`
                        verifyExists = true
                        clearInterval(myInterval)
                    }
                }
            }, 300)

        }