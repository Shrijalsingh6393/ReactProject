import React from "react";

class TableComponent extends React.Component{
    render(){
        return(
            <div>
                <table border="1">
                    <tr>
                        <th>Name</th>
                        <th>Rollno</th>
                    </tr>

                    <tr>
                        <td>Shrijal</td>
                        <td>16</td>
                    </tr>
                    <tr>
                        <td>Shri</td>
                        <td>41</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default TableComponent;