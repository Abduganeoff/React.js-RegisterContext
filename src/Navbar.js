import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';
import { 
        AppBar, 
        Toolbar, 
        IconButton, 
        Typography, 
        InputBase,
        Switch
    } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/NavbarStyles';

const content = {
    english: {
        search: 'Search',
        flag: 'Eng',
        title: 'App title'
    },
    french: {
        search: 'Chercher',
        flag: 'Fra',
        title: `Titre de l'application`
    },
    spanish: {
        search: 'Buscar',
        flag: 'Spa',
        title: 'Título de la aplicación'
    }
}

function Navbar (props) {
    const { isDarkMode, toggle } = useContext(ThemeContext)
    const { language } = useContext(LanguageContext);
    const { classes } = props;
    const { search, flag, title } = content[language];
    return (
        <div className={classes.root}>
            <AppBar position='static' color={isDarkMode ? 'default' : 'primary'}>
                <Toolbar>
                    <IconButton className={classes.menuButton} color='inherit'>
                        <span>{flag}</span>
                    </IconButton>
                    <Typography className={classes.title} variant='h6' color='inherit'>
                        {title}
                    </Typography>
                    <Switch onChange={toggle}/>
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase 
                            placeholder={`${search}...`}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(Navbar);
