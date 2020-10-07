import React, { useState, useEffect } from "react";



const Movie = () => {
    const [movie, setMovie] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const [newOverview, setNewOverview] = useState('');
    const [newRelease_date, setNewRelease_date] = useState('');
    const [newBackdrop_path, setNewBackdrop_path] = useState('');
    const [newPoster_path, setNewPoster_path] = useState('');
    const [newGenre_ids, setNewGenre_ids] = useState('');
    const [newGenre, setNewGenre] = useState('');
    const [newOwn, setNewOwn] = useState('');

    const TitleInputHandler=(enteredText)=>{
        setNewTitle(enteredText);
    }

}


