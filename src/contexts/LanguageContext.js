import React, {useState, createContext} from 'react';

export const LanguageContext = createContext();

export function LanguageProvider(props) {
    const [language, setLanguage] = useState('english');

    const selectLanguage = (e) => setLanguage(e.target.value);
    return(
        <LanguageContext.Provider 
            value={{ language, selectLanguage}}
        >
            {props.children}
        </LanguageContext.Provider>
    );

}
