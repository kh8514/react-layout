const Body = ({children}) => {
    return (
        <div className="flex justify-center">
            <div className="overflow-y-auto w-[90%] py-10">
                {children}
            </div>
        </div>
    )
}

export default Body