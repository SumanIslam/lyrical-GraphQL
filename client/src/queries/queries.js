import { gql } from "@apollo/client";
export const GET_SONGS = gql`
	query getSongs {
		songs {
			id
			title
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