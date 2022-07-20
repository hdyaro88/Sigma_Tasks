#include<bits/stdc++.h>
using namespace std;

int main() {
	int arr[] = {1 , 2 , 3 , 4 , 2 };
	int n = sizeof(arr) / sizeof(int);
	//first 
	int cnt[*max_element(arr , arr + n) + 1] = {0};
	for(int i = 0 ; i < n ; i++) {
		cnt[arr[i]]++;
		if(cnt[arr[i]] == 2) {
			cout << "The repeating integer is : " <<  arr[i] << endl;
			break;
		}
	}
	//second
	map<int , int> mp;
	for(int i = 0 ; i < n ; i++) {
		if(mp[arr[i]] == 1) {
			cout << "The repeating integer is : " <<  arr[i] << endl;
			break;
		}
		mp[arr[i]] = 1;
	}
}
	
