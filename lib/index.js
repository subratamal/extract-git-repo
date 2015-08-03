/******************************************************************************
 * Author       : Subrata Mal
 * Date         : 09 July 2015 (Thursday)
 * Time         : 11:21:58 AM
 * Description  : Extracts all the git repository present in the folder
 *  and restores them in the specified path.
 *****************************************************************************/
import dir from 'node-dir';

class ExtractGitRepoUrl {
    constructor({dirName}) {
        this.dirName = dirName;
        this._repositories = [];
    };

    get repositories() {
        return this._repositories;
    };

    set repositories(_repositories) {
        this._repositories = _repositories;
    };

    extract() {
        let self = this;

        dir.readFiles(self.dirName, {
              match: /^package.json$/,
          },
          function(err, content, next) {
              console.log(content);
              if(err) {
                  console.error("Error Happened!");
              }

              let packageJson = JSON.parse(content);
              let url = packageJson.url ||
                      (packageJson.repository && packageJson.repository.url && packageJson.repository.type === "git" ?
                      packageJson.repository.url : "");

              self.repositories.push({
                  name: packageJson.name,
                  url: url
              });
          }
        );
    }
}

export default ExtractGitRepoUrl;
