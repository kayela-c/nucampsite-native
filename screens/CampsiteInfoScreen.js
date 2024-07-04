import { FlatList, StyleSheet, Text, View, Button, Modal } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import RenderCampsite from '../features/campsites/RenderCampsite';
import { toggleFavorite } from '../features/favorites/favoritesSlice';
import { useState } from 'react';
import { Input, Rating } from 'react-native-elements';
import { postComment } from '../features/comments/commentsSlice';

const CampsiteInfoScreen = ({ route }) => {
    const { campsite } = route.params;
    const comments = useSelector((state) => state.comments);
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [rating, setRating] = useState(5);
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = () => {
        const newComment = {
            author,
            rating,
            text,
            campsiteId: campsite.id
        };
        dispatch(postComment(newComment));
        setShowModal(!showModal)
    };

    const resetForm = () => {
        setRating(5);
        setAuthor('');
        setText('');
    }

    const renderCommentItem = ({ item }) => {
        return (
            <View style={styles.commentItem}>
                <Text style={{ fontSize: 14 }}>{item.text}</Text>
                <Rating
                    readonly
                    startingValue={item.rating}
                    imageSize={10}
                    style={{
                        paddingVertical: '5%',
                        alignItems: 'flex-start'
                    }}
                />
                <Text style={{ fontSize: 12 }}>
                    {`-- ${item.author}, ${item.date}`}
                </Text>
            </View>
        );
    };

    return (
        <>
            <FlatList
                data={comments.commentsArray.filter(
                    (comment) => comment.campsiteId === campsite.id
                )}
                renderItem={renderCommentItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{
                    marginHorizontal: 20,
                    paddingVertical: 20
                }}
                ListHeaderComponent={
                    <>
                        <RenderCampsite
                            campsite={campsite}
                            isFavorite={favorites.includes(campsite.id)}
                            markFavorite={() => dispatch(toggleFavorite(campsite.id))}
                            onShowModal={() => setShowModal(!showModal)}
                        />
                        <Text style={styles.commentsTitle}>Comments</Text>
                    </>
                }
            />
            <Modal
                animationType='slide'
                transparent={false}
                visible={showModal}
                onRequestClose={() => setShowModal(!showModal)}

            >
                <View style={styles.modal}>
                    <Rating
                        showRating
                        startingValue={rating}
                        imageSize={40}
                        onFinishRating={(rating) => setRating(rating)}
                        style={{ paddingVertical: 10 }}
                    />
                    <Input
                        placeholder='Author'
////////// FIX 1 & 2: The "leftIcon" and "leftIconContainerStyle" properties are expressed as objects, not strings.
// OLD CODE:
/*
                        leftIcon='user-o'
                        leftIconContainerStyle='paddingRight: 10'
*/
                        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                        leftIconContainerStyle={{ paddingRight: 10 }}
////////// END FIX 1 & 2
                        onChangeText={(author) => setAuthor(author)}
                        value={author}
////////// NOTE: Input components are self-terminating -- no beginning and ending tags.
// OLD CODE:
/*
                    >

                    </Input>
*/
                    />
{
////////// END NOTE
}
                    <Input

                        placeholder='Comment'
////////// FIX 3: Same here, the "leftIcon" prop is expressed as an object.
// OLD CODE:                        leftIcon='comment-o'
                        leftIcon={{ type: 'font-awesome', name: 'comment-o' }}
////////// END FIX 3
                        leftIconContainerStyle={{ paddingRight: 10 }}
                        onChangeText={(text) => setText(text)}
                        value={text}
////////// NOTE: Same here, Input components are self-terminating.
// OLD CODE:
/*
                    >

                    </Input>
*/
                    />
{
////////// END NOTE

////////// FIX 4.1: The View component with the "modal" style is supposed to wrap the entire contents of the modal window, buttons included. I will move the
// closing of the View below the buttons and comment it out here.
/*              </View> */
////////// END FIX 4.1
}
                    <View style={{ margin: 10 }}>
                        <Button
                            onPress={() => {
                                handleSubmit();
                                resetForm();
////////// FIX 4: handleSubmit already closes the modal. There is no need for it here as well. I will comment it out.
/*                            setShowModal(!showModal); */
////////// END FIX 4
                            }}
                            color='#5637DD'
                            title='Submit'
                        />
                    </View>
                    <View style={{ margin: 10 }}>
                        <Button
                            onPress={() => {
                                setShowModal(!showModal);
                                resetForm();
                            }}
                            color='#808080'
                            title='Cancel'
                        />
                    </View>
{
////////// FIX 4.2: Here's where the View should close.
}
                </View>
{
////////// END FIX 4.2
}
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    commentsTitle: {
        textAlign: 'center',
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#43484D',
        padding: 10,
        paddingTop: 30
    },
    commentItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    modal: {
        margin: 20,
        justifyContent: 'center',
    },
});

export default CampsiteInfoScreen;
