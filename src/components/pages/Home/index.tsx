import * as React from 'react';
import { Text } from 'react-native';
import Input from '@atoms/Input';
import Button from '@atoms/Button';

const Home = () => {
    return (
        <>
            <Text style={{color: 'black' }}>NexoFit</Text>
            <Input />
            <Button title={'test'} color={'primary'} />
        </>
    );
}

export default Home;