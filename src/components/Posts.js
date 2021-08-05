import React from "react";
import {connect}from "react-redux";//Для передачи состояния из стора в компонент
import Post from "./Post.js";

const Posts = ({syncPosts}) => {
	if(!syncPosts.length){
		return (
			<p className="text-center">Постов пока нет</p>
		);
	}
	return syncPosts.map((post) => (
		<Post post={post} key={post.id}/>
	));
};

//Какое состояние нам надо спроецировать в свойства для данного компонента
const mapStateToProps = state => {
	return {
		syncPosts: state.posts.posts, //Название ключа может быть любым. Присваиваем нужное значение из стейта
	};
};

export default connect(mapStateToProps, null)(Posts);