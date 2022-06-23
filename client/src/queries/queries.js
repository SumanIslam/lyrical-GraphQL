import { gql } from "@apollo/client";

export const GET_SONGS = gql`
	query GetSongs {
		songs {
			id
			title
		}
	}
`;

export const GET_SONG = gql`
	query GetSong($id: ID!) {
		song(id: $id) {
			id
			title
			lyrics {
				id
				content
			}
		}
	}
`;

export const ADD_SONG = gql`
	mutation AddSong($title: String) {
		addSong(title: $title) {
			title
		}
	}
`;

export const DELETE_SONG = gql`
	mutation DeleteSong($id: ID) {
		deleteSong(id: $id) {
			id
		}
	}
`;

export const ADD_LYRIC_TO_SONG = gql`
	mutation AddLyricToSong($content: String, $songId: ID) {
		addLyricToSong(content: $content, songId: $songId) {
			id
			lyrics {
				content
			}
		}
	}
`;
export const LIKE_LYRIC = gql`
	mutation LikeLyric($id: ID) {
		likeLyric(id: $id) {
			id
			likes
			content
		}
	}
`;