const Smd =()=>{
    const mydata =[
        {id:1,name:"dtghg",rollno:11},
        {id:4,name:"xfscsbgnnmk",rollno:181},
        {id:6,name:"dtghgcgkjgn",rollno:6761}
        ]
    return(
        <div>
            <table><tr>

                <th>
                    id
                </th>
                <th>
                    name
                </th>
                <th>
                    rollno
                </th>
                
            </tr>
            {
                mydata.map((k)=>{
                   return(
                    <tr>
                        <td>{k.id}</td>
                        <td>{k.rollno}</td>
                        <td>{k.name}</td>
                    </tr>
                   )
                   
                })
            }
            </table>
        </div>
    )
}
export default Smd;