// Context.js
import React, { createContext, useState } from 'react';
import { questionsData as javascriptData } from '../../front-end/javascript/data';
import { questionsData as angularData } from '../../front-end/angular/data';
import { questionsData as reactData } from '../../front-end/react/data';
import { questionsData as vuejsData } from '../../front-end/vuejs/data';
import { questionsData as flutterData } from '../../front-end/flutter/data';
import { questionsData as reactNativeData } from '../../front-end/react-native/data';
import { questionsData as ionicData } from '../../front-end/ionic/data';
import { questionsData as cssData } from '../../front-end/css/data';
import { questionsData as htmlData } from '../../front-end/html/data';
import { questionsData as csharpData } from '../../back-end/csharp/data';
import { questionsData as azureData } from '../../cloud/azure/data';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [totalQuestions, setTotalQuesions] = useState({
    javascript: javascriptData.List.length,
    html: htmlData.List.length,
    css: cssData.List.length,
    angular: angularData.List.length,
    react: reactData.List.length,
    vuejs: vuejsData.List.length,
    flutter: flutterData.List.length,
    reactNative: reactNativeData.List.length,
    ionic: ionicData.List.length,
    csharp: csharpData.List.length,
    azure: azureData.List.length,
    node: '5',
    express: '5',
  });

  return (
    <AppContext.Provider value={{ totalQuestions, setTotalQuesions }}>
      {children}
    </AppContext.Provider>
  );
};
