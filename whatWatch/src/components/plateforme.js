import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';

const Plateforme = () => {

  return (
    <Plate>
      <TouchableOpacity>
        <ImagePlate source={require('../img/netflix.png')}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <ImagePlate source={require('../img/prime.png')}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <ImagePlate source={require('../img/disney.png')}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <ImagePlate2 source={require('../img/appleTv.png')}/>
      </TouchableOpacity>
    </Plate>
  );
};
const Plate = styled.View`
  flex-direction: row;
  align-items: center;
  width: 60px;
  height: 40px;
  margin-left: 16px;
  margin-bottom: 20px;
`;
const ImagePlate = styled.Image`
  width: 60px;
  height: 60px;
`;
const ImagePlate2 = styled.Image`
  width: 55px;
  height: 55px;
`;

export default Plateforme;