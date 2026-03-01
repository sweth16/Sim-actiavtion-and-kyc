package com.telecom.auth_service.service;


//import com.telecom.auth_service.entity.User;
//import com.telecom.auth_service.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//@Service
//public class AuthService {
//
//    @Autowired
//    private UserRepository repo;
//
//    @Autowired
//    private PasswordEncoder encoder;
//
//    public User validateUser(String username, String password) {
//
//        return repo.findByUsername(username)
//                .filter(u -> encoder.matches(password, u.getPassword()))
//                .orElse(null);
//    }
//}



//
//import com.telecom.auth_service.entity.User;
//import com.telecom.auth_service.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service
//public class AuthService {
//
//    @Autowired
//    private UserRepository repo;
//
//    public User validateUser(String username, String password) {
//        return repo.findByUsername(username)
//                .filter(user -> user.getPassword().equals(password))
//                .orElse(null);
//    }
//}




import com.telecom.auth_service.dto.RegisterRequest;
import com.telecom.auth_service.entity.User;
import com.telecom.auth_service.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository repo;

    // ✅ LOGIN
    public User validateUser(String username, String password) {
        return repo.findByUsername(username)
                .filter(user -> user.getPassword().equals(password))
                .orElse(null);
    }

    // ✅ REGISTER (NEW)
    public User register(RegisterRequest request) {

        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(request.getPassword());
        user.setRole(request.getRole());
        user.setPhone(request.getPhone());

        return repo.save(user);
    }
}
