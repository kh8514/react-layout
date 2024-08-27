const { useEffect, useState } = require("react");

const useDetetClose = (elem, initalState) => {
    const [isOpen, setIsOpen] = useState(initalState) ;

    useEffect(() => {
        const onClick = (e) => {
            if(elem?.current) {
                if(elem.current !== null && !elem.current.contains(e.target)) {
                    setIsOpen(!isOpen)
                }
            }
        };

        if(isOpen) {
            window.addEventListener("click", onClick)
        }

        return () => {
            window.removeEventListener("click", onClick);
        }
    }, [isOpen])
}

export default useDetetClose;