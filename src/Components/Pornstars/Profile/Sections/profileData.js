import React from 'react';

const ProfileData = ({model})=>{

    return(
        <section className = "profile-data">

            <table>
                <tbody>
                    <tr>
                        <td>Age</td><th className = "one">{model.Age}</th>
                        <td>Birthdate</td><th className = "two">{model.Birthdate}</th>
                    </tr>
                    <tr>
                        <td>Height</td><th className = "one">{model.Height}</th>
                        <td>Birthplace</td><th className = "two"><a href={`https://www.google.com/maps/place/${model.Birthplace}`} target = "_blank">{model.Birthplace}</a></th>       
                    </tr>
                    <tr>
                        <td>Weight</td><th className = "one">{model.Weight} lbs</th>
                        <td>Measurements</td><th className = "two">{model.Measurements}</th>
                    </tr>
                    <tr>
                        <td>Eye Color</td><th className = "one">{model.EyeColor}</th>
                        <td>Hair Color(s)</td><th className = "two">{model.HairColor}</th>
                    </tr>
                    <tr>
                        <td>Breast Type</td><th className = "one">{model.BreastType}</th>
                        <td>Years Active</td><th className = "two">{model.YearsActive}</th>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default ProfileData