/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function (n, languages, friendships) {
    let usersToTeach = new Set();

    for (let [u1, u2] of friendships) {
        u1 -= 1;
        u2 -= 1;
        let canCommunicate = false;
        for (let lang1 of languages[u1]) {
            for (let lang2 of languages[u2]) {
                if (lang1 === lang2) {
                    canCommunicate = true;
                    break;
                }
            }
            if (canCommunicate) break;
        }
        if (!canCommunicate) {
            usersToTeach.add(u1);
            usersToTeach.add(u2);
        }
    }
    let minUsersToTeach = languages.length + 1;

    for (let lang = 1; lang <= n; lang++) {
        let count = 0;

        for (let user of usersToTeach) {
            if (!languages[user].includes(lang)) {
                count++;
            }
        }

        minUsersToTeach = Math.min(minUsersToTeach, count);
    }
    return minUsersToTeach;
};

const n = 2, languages = [[1], [2], [1, 2]], friendships = [[1, 2], [1, 3], [2, 3]];
console.log(minimumTeachings(n, languages, friendships));