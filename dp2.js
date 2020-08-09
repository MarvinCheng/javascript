// In our system each user belongs to a user-group with a defined set of permissions - we name such a group “Role”.
// A certain role (unless it is the root) must have a parent role to whom it reports to. For example a customer may have these 4 roles in their account:
//
// var objRole1 = {
// 	Id: 1,
// 	Name: 'System Administrator',
// 	Parent: 0
// };

// var objRole2 = {
// 	Id: 2,
// 	Name: 'Location Manager',
// 	Parent: 1
// };

// var objRole3 = {
// 	Id: 3,
// 	Name: 'Supervisor',
// 	Parent: 2
// };

// var objRole4 = {
// 	Id: 4,
// 	Name: 'Employee',
// 	Parent: 3
// };

// 	Notice how the System Administrator has no parent role and how Employee has as parent Role the Supervisor.
// 	Naturally this cascading parent-child relation means that Location Manager, Supervisor, Employee are all subordinate roles to System Administrator.
//
// 	Some users in that account may look as follows:
//
//
// var objUser1 = {
// 	Id: 1,
// 	Name: 'Adam Admin',
// 	Role: 1
// };

// var objUser2 = {
// 	Id: 2,
// 	Name: 'Emily Employee',
// 	Role: 4
// };

// var objUser3 = {
// 	Id: 3,
// 	Name: 'Sam Supervisor',
// 	Role: 3
// };

// var objUser4 = {
// 	Id: 4,
// 	Name: 'Mary Manager',
// 	Role: 2
// };

// If you are given an arbitrary collection or roles and users, can you come up with an algorithm so that for a given user Id,
// you can output the subordinate users of that user (i.e. the array with the users who have a subordinate role to the role of the given user)?
// 	For example if you were given user #3 in the above example (Sam Supervisor),
// 	you should output just objUser2 (Emily Employee). That is because the role Supervisor has only one subordinate role, which is the role Employee.

const objRole1 = {
	Id: 1,
	Name: 'System Administrator',
	Parent: 0
};

const objRole2 = {
	Id: 2,
	Name: 'Location Manager',
	Parent: 1
};

const objRole3 = {
	Id: 3,
	Name: 'Supervisor',
	Parent: 2
};

const objRole4 = {
	Id: 4,
	Name: 'Employee',
	Parent: 3
};

const objUser1 = {
	Id: 1,
	Name: 'Adam Admin',
	Role: 1
};

const objUser2 = {
	Id: 2,
	Name: 'Emily Employee',
	Role: 4
};

const objUser3 = {
	Id: 3,
	Name: 'Sam Supervisor',
	Role: 3
};

const objUser4 = {
	Id: 4,
	Name: 'Mary Manager',
	Role: 2
};

const objUser5 = {
	Id: 5,
	Name: 'New Employee',
	Role: 4
};

const objUser6 = {
	Id: 6,
	Name: 'New New Employee',
	Role: 4
};

const objUser7 = {
	Id: 7,
	Name: 'New Supervisor',
	Role: 3
};

function buildObjectFromArray(array){
	const obj = {};
	array.forEach(arr => {
		obj[arr.Id] = arr;
	});
	return obj;
}

/** Initialize variables and relationship object. **/
const roles = [objRole1, objRole2, objRole3, objRole4];
const users = [objUser1, objUser2, objUser3, objUser4, objUser5, objUser6,objUser7];
const rolesObj = buildObjectFromArray(roles);
const usersObj = buildObjectFromArray(users);
const usersRoleRelationshipObj = {};
const parentRoleRelationshipObj = {};
// Loop through users array to populate a relationship object between user and role
// so that we can lookup user Id by Role
// the value of object is an array, because it might have more than 1 employee with the same Role
users.forEach(user=>{
	if(!usersRoleRelationshipObj[user.Role]){
		usersRoleRelationshipObj[user.Role] = [];
	}
	usersRoleRelationshipObj[user.Role].push(user.Id);
});
// Same goes to here, loop roles array to populate a relationship object Parent and Role.
// these 2 object should be stored in Company or Account class, so it doesn't have to get initialized
// every time getSubordinate function runs.
for(const role of roles){
	parentRoleRelationshipObj[role.Parent] = role.Id;
}

/**
 * Returns subordinates of the user
 *
 * @param userId
 * @returns {Array}
 */
function getSubordinate(userId){
	const result = [];
	getSubordinateByUserId(userId);
	return result;

	function getSubordinateByUserId(userId) {
		const user = usersObj[userId];
		if(!user) {
			throw new Error(`User with Id: ${userId} not found`);
		} else if(!rolesObj[user.Role]){
			throw new Error("Role not found");
		}
		// get roleId from parentRoleRelationshipObj using user.Role as parentId,
		// then find role that is corresponding to the roleId.
		const subordinateRole = rolesObj[
			parentRoleRelationshipObj[String(user.Role)]];

		// return the result if there is no subordinate role found
		if(!subordinateRole){
			return;
		}
		// get userIds from usersRoleRelationshipObj using subordinateRole.Id as roleId,
		// then find user that is corresponding to the userIds.
		const userRolesArray = usersRoleRelationshipObj[subordinateRole.Id];
		userRolesArray.forEach((userRole, idx) => {
			const subordinate = usersObj[userRole];
			result.push(subordinate);
			// use the last user to find subordinate
			if(idx === userRolesArray.length -1){
				// loop through getSubordinateByUserId with subordinate userId
				getSubordinateByUserId(subordinate.Id);
			}
		});
	}
}

console.log(getSubordinate(4));
console.log(getSubordinate(2));
console.log(getSubordinate(1));
console.log(getSubordinate(3));
