import './App.css'
import User from "./components/user/User";
import Address from "./components/address/Address";
import Geo from "./components/geo/Geo";

export default function App() {
    return (
        <div>
            <User id={'1'} name={'Leanne Graham'} username={'Bret'} email={'Sincere@april.biz'}/>
            <Address street={'Kulas Light'} suite={'Apt. 556'} city={'Gwenborough'} zipcode={'92998-3874'}/>
            <Geo lat={'-37.3159'} lng={'81.1496'}/>

            <User id={'2'} name={'Ervin Howell'} username={'Antonette'} email={'Shanna@melissa.tv'}/>
            <Address street={'Victor Plains'} suite={'Suite 879'} city={'Wisokyburgh'} zipcode={'90566-7771'}/>
            <Geo lat={'-43.9509'} lng={'-34.4618'}/>


            <User id={'3'} name={'Clementine Bauch'} username={'Samantha'} email={'Nathan@yesenia.net'}/>
            <Address street={'Douglas Extension'} suite={'Suite 847'} city={'McKenziehaven'} zipcode={'59590-4157'}/>
            <Geo lat={'-68.6102'} lng={'-47.0653'}/>


            <User id={'4'} name={'Patricia Lebsack'} username={'Karianne'} email={'Julianne.OConner@kory.org'}/>
            <Address street={'Hoeger Mall'} suite={'Apt. 692'} city={'South Elvis'} zipcode={'53919-4257'}/>
            <Geo lat={'29.4572'} lng={'-164.2990'}/>


            <User id={'5'} name={'Chelsey Dietrich'} username={'Kamren'} email={'Lucio_Hettinger@annie.ca'}/>
            <Address street={'Skiles Walks'} suite={'Suite 351'} city={'Roscoeview'} zipcode={'33263'}/>
            <Geo lat={'-31.8129'} lng={'62.5342'}/>


            <User id={'6'} name={'Mrs. Dennis Schulist'} username={'Leopoldo_Corkery'}
                  email={'Karley_Dach@jasper.info'}/>
            <Address street={'Norberto Crossing'} suite={'Apt. 950'} city={'South Christy'} zipcode={'23505-1337'}/>
            <Geo lat={'-14.3990'} lng={'-120.7677'}/>


            <User id={'7'} name={'Kurtis Weissnat'} username={'Elwyn.Skile'} email={'Telly.Hoeger@billy.biz'}/>
            <Address street={'Rex Trail'} suite={'Suite 280'} city={'Howemouth'} zipcode={'58804-1099'}/>
            <Geo lat={'-71.4197'} lng={'71.7478'}/>


            <User id={'8'} name={'Nicholas Runolfsdottir V'} username={'Maxime_Nienow'}
                  email={'Sherwood@rosamond.meo'}/>
            <Address street={'Ellsworth Summit'} suite={'Suite 729'} city={'Aliyaview'} zipcode={'45169'}/>
            <Geo lat={'24.8918'} lng={'21.8984'}/>


            <User id={'9'} name={'Glenna Reicher'} username={'Delphine'} email={'Chaim_McDermott@dana.io'}/>
            <Address street={'Dayna Park'} suite={'Suite 449'} city={'Bartholomebury'} zipcode={'76495-3109'}/>
            <Geo lat={'24.6463'} lng={'-168.8889'}/>


            <User id={'10'} name={'Clementina DuBuqu'} username={'Moriah.Stanto'} email={'Rey.Padberg@karina.biz'}/>
            <Address street={'Kattie Turnpike'} suite={'Suite 198'} city={'Lebsackbury'} zipcode={'31428-2261'}/>
            <Geo lat={'-38.2386'} lng={'57.2232'}/>

        </div>
    );
}

