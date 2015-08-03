/******************************************************************************
 * Author       : Subrata Mal
 * Date         : 10 July 2015 (Friday)
 * Time         : 06:10:33 PM
 * Description  : Extractor invoker
 *****************************************************************************/
import ExtractGitRepoUrl from './index';

class Main {
  constructor() {
    debugger;
    let extractGitRepoObj = new ExtractGitRepoUrl({dirName: "/Users/subratamal/Works.Pers/Application"});
    extractGitRepoObj.extract();
  }
}

new Main();
