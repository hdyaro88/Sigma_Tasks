#include<bits/stdc++.h>
using namespace std;

int main() {
	string s1 = "ABCD" , s2 = "DCAB";
	sort(s1.begin() , s1.end());
	sort(s2.begin() , s2.end());
	if(s1 == s2) {
		cout << "These are anagrams of each other." << endl;
	}
	else{
		cout << "These are not anagrams of each other." << endl;
	}
}
	
